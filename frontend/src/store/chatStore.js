import { create } from "zustand";
import axios from "../config/axios";

const useChatStore = create((set) => ({
  chats: [],
  currentChat: null,
  isLoading: false,
  error: null,

  fetchChats: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("/chats");
      set({ chats: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  setCurrentChat: (chat) => set({ currentChat: chat }),

  sendMessage: async (content, chatId) => {
    try {
      const response = await axios.post(`/chats/${chatId}/messages`, { content });
      return response.data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  }
}));

export default useChatStore;