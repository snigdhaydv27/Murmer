import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Validation
    if (!email || !username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid email format" 
      });
    }

    // Password length validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email 
          ? "Email already exists" 
          : "Username already exists"
      });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id }, 
      ENV_VARS.JWT_SECRET, 
      { expiresIn: '30d' }
    );

    // Set cookie
    res.cookie('jwt-murmer', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    });

    // Send response
    const userWithoutPassword = { ...newUser._doc };
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false, 
                message: "All fields are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false, 
                message: "Invalid email or password"
            });
        }

        // Check password
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false, 
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            ENV_VARS.JWT_SECRET,
            { expiresIn: '30d' }
        );

        // Set cookie
        res.cookie('jwt-murmer', token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        });

        // Send response
        const userWithoutPassword = { ...user._doc };
        delete userWithoutPassword.password;

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: userWithoutPassword,
            token
        });

    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({
            success: false, 
            message: "Internal server error"
        });
    }
};

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

