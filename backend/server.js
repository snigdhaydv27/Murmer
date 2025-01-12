import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import chatRoutes from './routes/chat.routes.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const PORT = ENV_VARS.PORT;

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.on('join-chat', (chatId) => {
    socket.join(chatId);
  });

  socket.on('send-message', async (message) => {
    io.to(message.chatId).emit('receive-message', message);
  });
});

httpServer.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
    connectDB();
});



