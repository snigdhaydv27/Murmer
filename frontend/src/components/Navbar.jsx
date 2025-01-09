import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between">
      <div className="w-full h-16 font-semibold flex justify-between px-12 items-center">
        <img src="/logo2.png" alt="Logo" className="w-32 sm:w-40" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center  gap-20">
          <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
            About Us
          </Link>
          <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
            Contact Us
          </Link>
          <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Button*/}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full md:hidden px-12 py-4 bg-white">
          <div className="flex flex-col gap-4">
            <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
              About Us
            </Link>
            <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
              Contact Us
            </Link>
            <Link to="/" className="hover:underline underline-offset-4 decoration-red-500 decoration-[3.5px]">
              Features
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;