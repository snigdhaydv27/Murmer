import express from 'express';
import { Chat } from '../models/chat.model.js';
import { protectRoute } from '../middlewares/protectRoute.js';
import { Message } from '../models/message.model.js';

const router = express.Router();

// Get all chats for the current user
router.get('/chats', protectRoute, async (req, res) => {
  try {
    const chats = await Chat.find({
      participants: req.user._id,
      isArchived: false
    })
    .populate('participants', 'name avatar') // Populate user details if needed
    .sort({ lastMessageTime: -1 });

    // Format the response to match the frontend interface
    const formattedChats = chats.map(chat => ({
      id: chat._id,
      name: chat.name,
      avatar: chat.avatar,
      lastMessage: chat.lastMessage,
      lastMessageTime: chat.lastMessageTime.toISOString(),
      unreadCount: chat.unreadCount
    }));

    res.json(formattedChats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new chat
router.post('/chats', protectRoute, async (req, res) => {
  try {
    const { name, participants } = req.body;
    
    const newChat = new Chat({
      name,
      participants: [...participants, req.user._id],
    });

    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new routes for messages
router.get('/chats/:chatId/messages', protectRoute, async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId })
      .populate('sender', 'username avatar')
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/chats/:chatId/messages', protectRoute, async (req, res) => {
  try {
    const { content } = req.body;
    const chatId = req.params.chatId;

    const newMessage = new Message({
      chatId,
      content,
      sender: req.user._id
    });

    await newMessage.save();

    // Update chat's last message
    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: content,
      lastMessageTime: new Date()
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;