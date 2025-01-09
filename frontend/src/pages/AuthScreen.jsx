function authScreen() {
  return (
    <>
      <div className="md:flex md:justify-center md:flex-row md:items-center h-screen sm:flex-col">
        {/* Left Side */}
        <div className="md:w-1/2 h-full  p-10 sm:w-full">
          <p className="text-slate-500 text-5xl font-bold">A place for</p>
          <p className="text-slate-500 text-5xl font-bold">meaningful</p>
          <p className="text-slate-500 text-5xl font-bold">conversations</p>
          <p className="text-xl mt-10">
            Connect with your friends and family, build your
          </p>
          <p className="text-xl"> community and deepen your interests.</p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email"
              className="w-[250px] p-2 mt-10 rounded-xl outline-none border-[2.5px] border-slate-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[250px] p-2 mt-5 rounded-xl outline-none border-[2.5px] border-slate-300"
            />
            <button className="w-[90px] p-2 mt-5 rounded-3xl bg-blue-500 text-black">
              Login
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 h-full  sm:w-full flex justify-center items-center px-2">
          <video
            className="h-3/4"
            playsInline
            autoPlay={true}
            muted
            loop
          >
            <source src="/hero-vid.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default authScreen;
