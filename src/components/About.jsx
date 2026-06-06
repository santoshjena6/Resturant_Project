import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image side - FULL image, no crop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* EST badge */}
            <div className="absolute -top-5 -right-5 z-10 w-20 h-20 bg-punjabi-saffron rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white text-[10px] font-bold uppercase">Est.</span>
              <span className="text-white text-xl font-black leading-tight">2009</span>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(92,58,33,0.15)] border-4 border-white">
              {/* Full image - object-contain so nothing is cut */}
              <img
                src="/images/inageofresurant.png"
                alt="Kake Da Minar Restaurant"
                className="w-full h-auto object-contain bg-[#1a0a00]"
              />
            </div>

            {/* Punjabi quote below image */}
            <div className="mt-4 bg-earthy-brown text-white px-6 py-4 rounded-2xl shadow-md">
              <p className="font-semibold text-lg italic text-orange-200">"Jithe pyaar, othe swaad."</p>
              <p className="text-white/60 text-sm mt-1">Where there is love, there is taste.</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-punjabi-red rounded-full"></div>
              <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-earthy-brown mb-2 leading-tight">
              A Legacy of
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-punjabi-saffron mb-6 leading-tight">
              Authentic Taste
            </h2>

            <p className="text-text-muted text-base leading-relaxed mb-4">
              Welcome to <strong className="text-earthy-brown">Kake Da Minar</strong> — where every dish carries the soul of Punjab's rich culinary heritage. Founded in 2009, we have been bringing the authentic flavors of North India to Bhubaneswar for over 15 years.
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              From our traditional clay tandoor to our slow-simmered handi dishes, every meal is prepared with 100% pure desi ghee and a generous helping of love. We're not just a restaurant — we're a warm family dhaba that treats every guest as our own.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {[
                { num: '15+', label: 'Years of Trust' },
                { num: '50+', label: 'Dishes' },
                { num: '6600+', label: 'Happy Guests' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-punjabi-saffron">{s.num}</div>
                  <div className="text-xs text-text-muted font-semibold uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Feature tags */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🔥', label: 'Traditional Tandoor' },
                { icon: '🥛', label: '100% Pure Desi Ghee' },
                { icon: '👨‍👩‍👧', label: 'Family Dining' },
                { icon: '🌿', label: 'Fresh Authentic Spices' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-card border border-cream-dark">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-text-main font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
