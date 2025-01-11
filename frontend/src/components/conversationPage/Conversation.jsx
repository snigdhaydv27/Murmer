import { Link, Phone, Video } from "lucide-react";

function Conversation() {
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
        <div className="h-[70px] w-[calc(100%-430px)] fixed bottom-0">
          <div className="flex flex-row items-center justify-between gap-4 px-4 h-full">
            <div className="bg-slate-100 w-full flex flex-row items-center justify-center gap-4 rounded-xl px-4">
             <Link/> 
            <input
              type="text"
              placeholder="Write a message..."
              className="w-full px-1 py-2 rounded-xl outline-none text-sm bg-slate-100"
            />
            </div>
            <button className="bg-yellow-300 px-4 py-2 rounded-xl text-sm hover:bg-yellow-400">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
