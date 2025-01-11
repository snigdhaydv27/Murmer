import { Bolt, Search } from "lucide-react";

function ChatPanel() {
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
      </div>
    </>
  );
}

export default ChatPanel;
