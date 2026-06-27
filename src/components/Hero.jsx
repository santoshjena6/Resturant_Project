import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section id="home" className="relative h-screen bg-brand-brown flex items-center justify-center overflow-hidden">

    {/* Background image with slow Ken-Burns zoom */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 z-10" />
      <img
        src="/images/inageofresurant.png"
        alt="Kake Da Minar Restaurant"
        className="w-full h-full object-cover animate-slow-zoom"
      />
    </div>

    {/* Main content */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-56 md:mt-72"
    >
      {/* Eyebrow badge */}
      <motion.div variants={fadeUp} className="mb-10 flex items-center gap-3">
        <span className="w-10 h-px bg-brand-gold/50" />
        <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.6em]">
          Established 2009 &nbsp;&middot;&nbsp; Bhubaneswar
        </span>
        <span className="w-10 h-px bg-brand-gold/50" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeUp}
        className="text-white/75 text-base md:text-xl font-light leading-relaxed mb-12 max-w-xl"
      >
        Authentic Punjabi flavors, royalty in every bite.
        <br className="hidden md:block" />
        Bhubaneswar's most beloved dining destination.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
        <a
          href="#reservation"
          className="bg-brand-gold text-brand-brown px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
        >
          Book Your Table
        </a>
        <a
          href="#menu"
          className="border border-white/35 text-white px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white/12 hover:border-white/60 active:scale-95 transition-all duration-300 backdrop-blur-sm"
        >
          View Menu
        </a>
      </motion.div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1 }}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
    >
      <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.45em]">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-brand-gold/60 to-transparent animate-scroll-bounce" />
    </motion.div>
  </section>
);

export default Hero;
