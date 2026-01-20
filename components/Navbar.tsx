
import React from 'react';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#como-funciona" className="hover:text-orange-500 transition-colors">Método</a>
          <a href="#restaurantes" className="hover:text-orange-500 transition-colors">Espetos</a>
          <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
