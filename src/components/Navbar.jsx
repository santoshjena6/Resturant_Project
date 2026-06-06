import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#5C3A21] shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Kake Da Minar Logo"
              className="w-12 h-12 object-contain rounded-full bg-white/10 p-0.5"
            />
            <div className="hidden sm:block">
              <span className={`block font-bold text-lg leading-tight ${scrolled ? 'text-white' : 'text-earthy-brown'}`}>
                Kake Da Minar
              </span>
              <span className={`block text-xs tracking-widest uppercase ${scrolled ? 'text-orange-200' : 'text-text-muted'}`}>
                Bhubaneswar
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`font-semibold uppercase tracking-wider text-sm transition-colors ${
                  scrolled ? 'text-orange-100 hover:text-white' : 'text-text-main hover:text-punjabi-saffron'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-punjabi-saffron text-white font-bold py-2 px-6 rounded-full hover:bg-[#d66516] transition-colors text-sm"
            >
              Book Table
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${scrolled ? 'text-white' : 'text-earthy-brown'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-earthy-brown px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-orange-100 hover:text-white font-semibold uppercase tracking-wider text-base transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-punjabi-saffron text-white font-bold py-3 px-8 rounded-full text-center text-sm hover:bg-[#d66516] transition-colors">
              Book Table
            </a>
          </motion.div>
        )}
      </motion.nav>

      {/* Sticky floating Book Table button (mobile) */}
      <a
        href="#contact"
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 md:hidden bg-punjabi-saffron text-white font-bold px-8 py-3 rounded-full shadow-lg text-sm tracking-wide"
      >
        🍽️ Book a Table
      </a>
    </>
  );
};

export default Navbar;
