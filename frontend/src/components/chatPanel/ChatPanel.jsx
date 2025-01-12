import { Bolt, Search } from "lucide-react";
import { useEffect } from "react";
import useChatStore from "../../store/chatStore";

function ChatPanel() {
  const { chats, fetchChats, setCurrentChat, isLoading } = useChatStore();

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  return (
    <>
      <div className="md:ml-20 md:h-screen h-[calc(100vh-140px)] md:w-[350px] w-full fixed top-0 mt-[60px] md:mt-0 md:shadow-2xl shadow-xl md:shadow-slate-300 shadow-slate-50">
        <div className="flex items-center justify-between px-2 md:mt-6">
          <p className="text-2xl font-bold ml-3">Chats</p>
          <Bolt className="hidden md:flex" />
        </div>
        <div className="flex flex-row justify-center items-center mx-4 rounded-xl border-[2px] mt-2">
          <Search className="pl-1 text-slate-300" />
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full px-3 py-2 text-sm rounded-lg outline-none"
          />
        </div>

        {/* Chat list */}
        <div className="mt-4 overflow-y-auto h-[calc(100%-120px)]">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setCurrentChat(chat)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 cursor-pointer"
              >
                <img
                  src={chat.avatar || "./auth.jpg"}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ChatPanel;