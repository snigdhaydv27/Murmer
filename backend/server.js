import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const PORT = ENV_VARS.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
    connectDB();
});



