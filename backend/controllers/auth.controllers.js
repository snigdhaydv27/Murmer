import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fiels are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 6 characters",
        });
    }
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in signup controlller", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({success:false, message:"All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"User not found"});
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({success:false, message:"Invalid password"});
        }
        res.status(200).json({
			success: true,
			user: {
				...user._doc,
				password: "",
			},
		});
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-murmer").json({success:true, message:"Logout successful"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}


export async function authCheck(req, res) {
	try {
		console.log("req.user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

