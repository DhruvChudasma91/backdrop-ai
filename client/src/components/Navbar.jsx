import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 font-outfit">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <img 
          src="/logo.svg" 
          alt="Backdrop.ai Logo" 
          className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300" 
        />
        <span className="text-2xl font-black tracking-tight text-slate-900">
          backdrop<span className="text-blue-600">.ai</span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2">
          Login
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-all active:scale-95">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;