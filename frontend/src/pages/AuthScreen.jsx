import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

function AuthScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="md:flex md:justify-center md:flex-row md:items-center h-screen flex justify-center items-center">
        <Navbar />
        {/* Left Side */}
        <div className="md:w-1/2 p-10 sm:w-full">
          <p className="text-slate-500 md:text-5xl text-4xl font-bold">A platform for</p>
          <p className="text-slate-500 md:text-5xl text-4xl font-bold">meaningful</p>
          <p className="text-slate-500 md:text-5xl text-4xl font-bold">interactions.</p>
          <p className="md:text-xl text-slate-500 text-lg mt-10">
            Engage with loved ones, strengthen your
          </p>
          <p className="md:text-xl text-slate-500 text-lg">
            connections, and explore your passions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-[250px] p-2 mt-10 rounded-xl outline-none border-[2.5px] border-slate-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-[250px] p-2 mt-5 rounded-xl outline-none border-[2.5px] border-slate-300"
            />
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-[90px] p-2 mt-5 rounded-3xl bg-yellow-400 text-black hover:bg-yellow-500 disabled:opacity-50"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 h-full w-full hidden justify-center items-center px-2 md:flex">
          <img
            src="./auth.jpg"
            alt="Welcome"
            className="w-full h-3/4 rounded-[100px] mr-10 mt-8 shadow-2xl shadow-yellow-400 object-cover"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AuthScreen;
