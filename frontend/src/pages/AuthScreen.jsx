function AuthScreen() {
  return (
    <>
      <div className="md:flex md:justify-center md:flex-row md:items-center h-screen flex justify-center items-center">
        {/* Left Side */}
        <div className="md:w-1/2 p-10 sm:w-full">
          <p className="text-yellow-400 md:text-5xl text-4xl font-bold">A platform for</p>
          <p className="text-yellow-400 md:text-5xl text-4xl font-bold">meaningful</p>
          <p className="text-yellow-400 md:text-5xl text-4xl font-bold">interactions.</p>
          <p className="md:text-xl text-slate-500 text-lg mt-10">
          Engage with loved ones, strengthen your
          </p>
          <p className="md:text-xl text-slate-500 text-lg"> connections, and explore your passions.</p>
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
            <button className="w-[90px] p-2 mt-5 rounded-3xl bg-yellow-400 text-black">
              Login
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 h-full w-full hidden justify-center items-center px-2 md:flex">
          {/* <video
            className="h-3/4"
            playsInline
            autoPlay={true}
            muted
            loop
          >
            <source src="/hero-vid.m4v" type="video/mp4" />
          </video> */}
          <img src="./auth.jpg" alt="Welcome" className="w-full h-3/4 rounded-[100px] mr-10 mt-8 shadow-2xl shadow-yellow-400 object-cover" />
        </div>
      </div>
    </>
  );
}

export default AuthScreen;
