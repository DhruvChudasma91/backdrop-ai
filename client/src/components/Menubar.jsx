import { useState } from "react";
import {assets} from "../assets/assets";
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Menubar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 font-outfit">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer group">
        <img 
          src={assets.logo}
          alt="Backdrop.ai Logo" 
          className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300" 
        />
        <span className="text-2xl font-black tracking-tight text-slate-900">
          backdrop<span className="text-blue-600">.ai</span>
        </span>
      </Link>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full font-medium transition-colors">
          Login
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-full font-medium transition-all active:scale-95">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} /> }
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
          <button className="text-gray-700 hover:text-blue-500 font-medium">
            Login
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium text-center">
            Sign up
          </button>
        </div>
      )}

    </nav>
  );
};

export default Menubar;