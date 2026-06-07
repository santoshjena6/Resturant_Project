import React from 'react';
import { MapPin, Phone, Mail, Clock, Share2, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-b border-white/5 pb-24">
        
        {/* Brand */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="Logo" className="w-16 h-16 rounded-full border border-white/10 p-1" />
            <div>
              <h2 className="text-white font-serif font-black text-3xl tracking-tight leading-none uppercase">Kake Da <span className="text-brand-gold italic">Minar</span></h2>
              <p className="text-white/30 text-[10px] uppercase font-black tracking-[0.4em] mt-2">Bhubaneswar Legacy</p>
            </div>
          </div>
          <p className="text-white/50 text-xl font-light leading-relaxed max-w-md italic font-display">
            "We preserve the authentic soul of Punjabi heritage while redefining what luxury dining feels like in Odisha."
          </p>
          <div className="flex gap-4">
            {[MessageSquare, Globe, Share2].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-all duration-500">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-3 space-y-10">
          <h4 className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">Explore</h4>
          <ul className="space-y-6">
            {['The Experience', 'Signature Menu', 'Gallery', 'Reservations', 'Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <h4 className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">Location</h4>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              Manipal Hospital, Near OMFED Square, Aryapalli, Bhubaneswar, Odisha 751013
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">Direct Connect</h4>
            <div className="space-y-2">
              <p className="text-white text-xl font-black font-serif">+91 94371 23456</p>
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase">namaste@kakedaminar.com</p>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.5em]">
          © {currentYear} KAKE DA MINAR. INDULGENCE REDEFINED.
        </p>
        <div className="flex gap-10">
          <a href="#" className="text-white/20 hover:text-white text-[9px] uppercase font-black tracking-[0.4em] transition-colors">Privacy</a>
          <a href="#" className="text-white/20 hover:text-white text-[9px] uppercase font-black tracking-[0.4em] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
