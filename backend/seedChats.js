import mongoose from 'mongoose';
import Chat from './models/chat.model.js';

const seedChats = async (userId) => {
  const sampleChats = [
    {
      name: "John Doe",
      avatar: "https://example.com/avatar1.jpg",
      lastMessage: "Hey, how are you?",
      lastMessageTime: new Date(),
      unreadCount: 2,
      participants: [userId]
    },
    {
      name: "Jane Smith",
      avatar: "https://example.com/avatar2.jpg",
      lastMessage: "See you tomorrow!",
      lastMessageTime: new Date(),
      unreadCount: 0,
      participants: [userId]
    }
  ];

  try {
    await Chat.insertMany(sampleChats);
    console.log('Sample chats created successfully');
  } catch (error) {
    console.error('Error seeding chats:', error);
  }
};

export default seedChats;