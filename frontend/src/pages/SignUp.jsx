import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function SignUp() {
  return (
    <div className=" h-screen flex justify-center items-center">
        <Navbar />
      <div className="flex justify-center items-center w-3/4 h-3/4 p-8 rounded-[100px] shadow-2xl shadow-yellow-400 bg-white">
      {/* left side */}
     <div className="w-1/2 flex flex-col justify-center items-center h-full hidden md:flex">
        <img src="./login.jpg" alt="Welcome" className="w-full h-full rounded-[200px] object-cover" />
     </div>
     {/* right side */}
     <div className="w-1/2 flex flex-col justify-center items-center h-full">
       <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
       <form className="flex flex-col justify-evenly items-center h-3/5 w-[220px]">
       <div className="flex flex-row justify-center items-center  rounded-xl border-[2.5px] border-slate-300">
       <img src="user.svg" alt="user" className=" ml-2 w-6 h-6" />
        <input type="text" placeholder="Username" className="w-full p-2  rounded-xl outline-none" />
        
       </div>
       <div className="flex flex-row justify-center items-center  rounded-xl border-[2.5px] border-slate-300">
       <img src="email.svg" alt="email" className=" ml-2 w-6 h-6" />
       <input
              type="text"
              placeholder="Email"
              className="w-full p-2  rounded-xl outline-none"
            />
         </div>
         <div className="flex flex-row justify-center items-center  rounded-xl border-[2.5px] border-slate-300">
       <img src="password.svg" alt="password" className=" ml-2 w-6 h-6" />   
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2  rounded-xl outline-none"
            />
            </div>
            <button className="w-[90px] p-2 rounded-3xl bg-yellow-400 text-white hover:bg-yellow-500">
              Sign Up
            </button>
       </form>
       <p className="text-sm text-slate-300">Or</p>
       <button 
         className="p-1 mt-4 rounded-3xl bg-white text-slate-500 border-[0.8px] border-white/2 w-[220px] items-center flex flex-row gap-2 hover:bg-slate-200"
       >
         <img src="./logo.webp" alt="h" className="w-10 h-10 self-center" />
         Continue with Google
       </button>
     </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp
