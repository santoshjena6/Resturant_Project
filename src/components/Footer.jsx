import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-earthy-brown text-cream-bg">
      {/* Top saffron border */}
      <div className="h-2 bg-gradient-to-r from-mustard via-punjabi-saffron to-punjabi-red"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Kake Da Minar Logo" className="w-14 h-14 object-contain rounded-full bg-white/10 p-1" />
              <div>
                <p className="font-display text-xl text-punjabi-saffron leading-tight">Kake Da Minar</p>
                <p className="text-cream-bg/60 text-xs tracking-widest uppercase">Bhubaneswar</p>
              </div>
            </div>
            <p className="text-cream-bg/70 text-sm leading-relaxed mb-6">
              Authentic Punjabi Dhaba & Hyderabadi Biryani. Serving Bhubaneswar with love since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fb', href: '#' },
                { icon: 'ig', href: '#' },
              ].map(s => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-cream-bg/20 flex items-center justify-center text-cream-bg/70 hover:bg-punjabi-saffron hover:border-punjabi-saffron hover:text-white transition-all"
                >
                  {s.icon === 'fb' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-punjabi-saffron mb-5 border-b border-cream-bg/10 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-cream-bg/70 hover:text-punjabi-saffron transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-punjabi-saffron mb-5 border-b border-cream-bg/10 pb-2">Contact</h4>
            <ul className="space-y-4 text-sm text-cream-bg/70">
              <li>📍 Bhubaneswar, Odisha 751024</li>
              <li>📞 <a href="tel:+919876543210" className="hover:text-punjabi-saffron transition-colors">+91 98765 43210</a></li>
              <li>✉️ <a href="mailto:info@kakedaminar.com" className="hover:text-punjabi-saffron transition-colors">info@kakedaminar.com</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-punjabi-saffron mb-5 border-b border-cream-bg/10 pb-2">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-cream-bg/70">
                <span>Monday – Friday</span>
                <span className="text-punjabi-saffron font-semibold">12PM – 11PM</span>
              </li>
              <li className="flex justify-between text-cream-bg/70">
                <span>Saturday – Sunday</span>
                <span className="text-punjabi-saffron font-semibold">12PM – 11:30PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream-bg/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-bg/50 text-sm">© {new Date().getFullYear()} Kake Da Minar. All rights reserved.</p>
          <p className="text-cream-bg/50 text-sm flex items-center gap-1">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
