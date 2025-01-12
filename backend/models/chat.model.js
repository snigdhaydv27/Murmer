import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "",
  },
  lastMessage: {
    type: String,
    default: "",
  },
  lastMessageTime: {
    type: Date,
    default: Date.now,
  },
  unreadCount: {
    type: Number,
    default: 0,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  isArchived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export const Chat = mongoose.model("Chat", chatSchema);
