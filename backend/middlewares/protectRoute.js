import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-murmer"]
        if (!token) {
            return res.status(401).json({success:false, message:"Unauthorized"});
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({success:false, message:"Unauthorized-Invalid Token"});
        }
        const user = await User.findById(decoded.id).select("-password");
        if(!user) {
            return res.status(401).json({success:false, message:"No User found"});
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}
