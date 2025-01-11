import Sidebar from "../components/sidebar/Sidebar";
import ChatPanel from "../components/chatPanel/ChatPanel";
const HomePage = () => {
  return (
    <div>
      <div className="w-[80px] h-[80px] flex items-center justify-center mt-1 ">
        <img src="./logo.png" alt="murmer" />
      </div>
      <Sidebar />
      <ChatPanel />
    </div>
  );
};

export default HomePage;
