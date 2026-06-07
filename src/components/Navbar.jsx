import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Legacy', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-brown py-2 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Kake Da Minar Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20" />
          <div className="flex flex-col text-left">
            <span className="text-white font-serif font-black text-xl md:text-2xl tracking-tighter leading-none italic">KAKE DA</span>
            <span className="text-brand-gold font-serif text-[10px] md:text-sm font-bold tracking-[0.3em] ml-1">MINAR</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-white/80 hover:text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] transition-colors">{link.name}</a>
          ))}
          <a href="#reservation" className="bg-brand-gold text-brand-brown px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">Book Table</a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-brown absolute top-full left-0 w-full p-6 border-t border-white/5 space-y-4">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-white text-sm font-bold uppercase tracking-widest">{link.name}</a>
          ))}
          <a href="#reservation" onClick={() => setMobileMenuOpen(false)} className="block bg-brand-gold text-brand-brown px-8 py-4 rounded-full text-center text-[10px] font-black uppercase tracking-widest">Book Table</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
