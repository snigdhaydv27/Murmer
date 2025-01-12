import { Link, Phone, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "../../config/axios";

function Conversation() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await axios.post("/chats/messages", {
        content: message,
        chatId: "current-chat-id" // Replace with actual chat ID
      });

      socket.emit("send-message", response.data);
      setMessages([...messages, response.data]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div className="h-screen w-full ml-[430px] fixed top-0 hidden md:flex">
        <div className="h-[70px] w-[calc(100%-430px)] flex flex-row items-center px-4 shadow-lg">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full">
              <img
                src="./auth.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p>Murmer</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-8 fixed right-0 px-8">
            <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl justify-center items-center flex">
              <Video/>
            </div>
            <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl justify-center items-center flex">
              <Phone/>
            </div>
          </div>
        </div>
        
        <div className="h-[calc(100%-140px)] w-full overflow-y-auto px-4 py-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} mb-2`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${
                msg.sender === "me" ? "bg-yellow-300" : "bg-slate-100"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[70px] w-[calc(100%-430px)] fixed bottom-0">
          <form onSubmit={sendMessage} className="flex flex-row items-center justify-between gap-4 px-4 h-full">
            <div className="bg-slate-100 w-full flex flex-row items-center justify-center gap-4 rounded-xl px-4">
              <Link/> 
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="w-full px-1 py-2 rounded-xl outline-none text-sm bg-slate-100"
              />
            </div>
            <button 
              type="submit"
              className="bg-yellow-300 px-4 py-2 rounded-xl text-sm hover:bg-yellow-400"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Conversation;