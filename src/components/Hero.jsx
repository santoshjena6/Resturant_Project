import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-brand-brown flex items-center justify-center overflow-hidden">
      {/* Darkened Authentic Photo Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src="/images/inageofresurant.png" 
          alt="Kake Da Minar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="max-w-3xl"
        >
          <div className="mb-6 flex flex-col items-center">
             <p className="text-brand-gold text-xs font-black uppercase tracking-[0.6em] mb-4">Established 2009</p>
          </div>

          {/* Title removed for simplicity as it is already in the background photo */}
          
          <p className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed">
            Authentic Punjabi flavors, royalty in every bite. <br className="hidden md:block" />
            Discover the legacy of Bhubaneswar's favorite dining destination.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#reservation" 
              className="bg-brand-gold text-brand-brown px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Book Your Table
            </a>
            
            <a 
              href="#menu" 
              className="border border-white/30 text-white px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating indicators removed for total simplicity */}
    </section>
  );
};

export default Hero;
