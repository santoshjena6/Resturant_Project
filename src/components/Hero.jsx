import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cream-bg bg-paper-texture relative overflow-hidden flex items-center"
    >
      {/* Decorative saffron top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-punjabi-red via-punjabi-saffron to-mustard"></div>

      {/* Background decorative circle */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-cream-dark rounded-full translate-x-1/3 -translate-y-1/4 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-cream-dark rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-punjabi-saffron/10 border border-punjabi-saffron/30 text-punjabi-saffron text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🌾 Est. 2009 · Bhubaneswar, Odisha
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-earthy-brown leading-tight mb-4">
              Kake Da<br />
              <span className="text-punjabi-saffron">Minar</span>
            </h1>

            <p className="text-lg md:text-xl font-serif italic text-text-muted mb-4">
              Punjabi Dhaba & Hyderabadi Biryani
            </p>

            <div className="w-16 h-1 bg-punjabi-red mx-auto lg:mx-0 mb-6 rounded-full"></div>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Savor the true taste of North India — authentic Mughlai recipes, slow-cooked in desi ghee, served with the warmth of Punjabi hospitality, right here in Bhubaneswar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#menu" className="bg-punjabi-saffron text-white font-bold py-3 px-8 rounded hover:bg-[#d66516] transition-colors text-base w-full sm:w-auto text-center">
                🍽️ View Menu
              </a>
              <a href="#contact" className="border-2 border-earthy-brown text-earthy-brown font-bold py-3 px-8 rounded hover:bg-earthy-brown hover:text-white transition-colors text-base w-full sm:w-auto text-center">
                📅 Book a Table
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-punjabi-saffron text-base">⏰</span>
                <span>12:00 PM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-punjabi-saffron text-base">📍</span>
                <span>Bhubaneswar, Odisha</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-base">★</span>
                <span>4.5 · 6600+ Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Doll Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center items-end relative"
          >
            {/* Decorative warm circle behind mascot */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[420px] md:h-[420px] bg-gradient-to-t from-punjabi-saffron/20 to-transparent rounded-full"></div>

            <motion.img
              src="/images/Doll.png"
              alt="Kake Da Minar Mascot"
              className="relative z-10 w-72 md:w-96 lg:w-[420px] object-contain drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />

            {/* Floating food badge */}
            <motion.div
              className="absolute top-10 right-0 bg-white shadow-card border border-cream-dark rounded-2xl px-5 py-3 text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 1, ease: 'easeInOut' }}
            >
              <div className="text-2xl font-bold font-serif text-punjabi-saffron">100%</div>
              <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">Pure Desi Ghee</div>
            </motion.div>

            {/* Floating rating badge */}
            <motion.div
              className="absolute bottom-10 left-0 md:left-10 bg-white shadow-card border border-cream-dark rounded-2xl px-5 py-3 text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: 'easeInOut' }}
            >
              <div className="text-2xl font-bold font-serif text-earthy-brown">4.5 ★</div>
              <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">Google Rating</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-mustard via-punjabi-saffron to-punjabi-red"></div>
    </section>
  );
};

export default Hero;
