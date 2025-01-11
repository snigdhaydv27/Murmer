import {
  UsersRoundIcon,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <div className="md:w-[80px] md:h-screen h-[80px] flex md:flex-col flex-row items-center justify-start fixed bottom-0 md:top-20 w-full">
        <div className="h-auto w-full flex md:flex-col flex-row items-center md:justify-start justify-between px-8 md:gap-3 md:mt-4">
          <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl flex items-center justify-center my-2">
            <MessageCircleMore />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl flex items-center justify-center my-2">
            <UsersRoundIcon />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl flex items-center justify-center my-2">
            <Phone />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-yellow-300 rounded-xl md:flex items-center justify-center my-2 hidden ">
            <Settings />
          </div>
          <div className="md:w-[70px] md:h-[70px] w-[40px] h-[40px] rounded-full md:fixed md:bottom-1">
            <img
              src="./auth.jpg"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
