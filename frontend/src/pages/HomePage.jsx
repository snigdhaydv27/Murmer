import Sidebar from "../components/sidebar/Sidebar";
import ChatPanel from "../components/chatPanel/ChatPanel";
import Conversation from "../components/conversationPage/Conversation";
const HomePage = () => {
  return (
    <div>
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] flex items-center justify-center mt-1 ">
        <img src="./logo.png" alt="murmer" />
      </div>
      <ChatPanel /> 
      <Sidebar />
      <Conversation/>
    </div>
  );
};

export default HomePage;