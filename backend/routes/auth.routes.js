import express from "express";
import { signup, login, logout, authCheck } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authcheck", protectRoute, authCheck);

export default router;
