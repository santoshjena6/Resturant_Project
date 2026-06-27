import React from 'react';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const DiamondIcon = () => (
  <span className="text-brand-gold text-xs">✦</span>
);

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/footer-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-b border-white/10 pb-10">

          {/* ── Brand Column ── */}
          <div className="space-y-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="w-14 h-14 rounded-full border border-brand-gold/30" />
              <div>
                <h2 className="text-white font-serif font-black text-2xl leading-none uppercase tracking-wide">
                  KAKE DA
                </h2>
                <h2 className="text-brand-gold font-serif font-black text-2xl leading-none uppercase tracking-wide italic">
                  MINAR
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center md:text-left">
              <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.4em]">Royal Punjabi Cuisine</p>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 h-px bg-brand-gold/30" />
                <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.3em]">Since 2009</span>
                <div className="flex-1 h-px bg-brand-gold/30" />
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Bringing the authentic flavors of Punjab with royal hospitality in the heart of Bhubaneswar. Where every meal is a celebration.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* Facebook */}
              <SocialIcon href="#" label="Facebook">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon href="#" label="Instagram">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </SocialIcon>
              {/* TripAdvisor */}
              <SocialIcon href="#" label="TripAdvisor">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-3-8a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm3 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
              </SocialIcon>
              {/* Google */}
              <SocialIcon href="#" label="Google">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="space-y-5">
            <div>
              <h4 className="text-brand-gold font-black text-xs uppercase tracking-[0.4em] mb-1">Quick Links</h4>
              <div className="w-8 h-px bg-brand-gold/50" />
            </div>
            <ul className="space-y-3.5">
              {[
                { label: 'Our Story',       href: '#about'       },
                { label: 'Signature Menu',  href: '#menu'        },
                { label: 'Private Dining',  href: '#reservation' },
                { label: 'Gallery',         href: '#gallery'     },
                { label: 'Book Table',      href: '#reservation' },
                { label: 'Contact Us',      href: '#contact'     },
              ].map(link => (
                <li key={link.label} className="flex items-center gap-2.5 group">
                  <DiamondIcon />
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div className="space-y-5">
            <div>
              <h4 className="text-brand-gold font-black text-xs uppercase tracking-[0.4em] mb-1">Contact Info</h4>
              <div className="w-8 h-px bg-brand-gold/50" />
            </div>

            <ul className="space-y-4">
              {/* Address */}
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-gold" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Manipal Hospital, Near OMFED Square,<br />Aryapalli, Bhubaneswar, Odisha 751013
                </p>
              </li>

              {/* Phone */}
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">+91 94371 23456</p>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-wider">For Reservations</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-brand-gold" />
                </div>
                <p className="text-white/60 text-sm">namaste@kakedaminar.com</p>
              </li>

              {/* Hours */}
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Mon – Sun : 11:00 AM – 11:30 PM</p>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-wider">Open All Days</p>
                </div>
              </li>

              {/* Rating */}
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Star size={14} className="text-brand-gold fill-brand-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-bold">4.8/5</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-wider">Based on 1200+ Google Reviews</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.5em]">
            © {currentYear} Kake Da Minar. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white text-[9px] uppercase font-black tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white text-[9px] uppercase font-black tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
