import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { src: '/images/maharaja_thali_hero.png',  label: 'Maharaja Thali',      sub: 'The Royal Feast'       },
  { src: '/images/tandoori_chicken.png',      label: 'Clay Oven Magic',     sub: 'Tandoori Specialties'  },
  { src: '/images/dal_makhani.png',           label: '24-Hour Dal',         sub: 'Dal Shaan-e-Punjab'    },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-16 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-3">Our Story in Frames</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-brown">
            TASTE &amp; <span className="text-brand-gold italic">MOMENTS</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-brand-gold/40" />
            <div className="w-2 h-2 rounded-full bg-brand-gold" />
            <div className="w-12 h-px bg-brand-gold/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

          {/* Large featured — top left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setLightbox(images[0])}
            className="col-span-2 md:col-span-2 row-span-2 relative overflow-hidden rounded-2xl cursor-zoom-in group"
            style={{ height: '420px' }}
          >
            <img src={images[0].src} alt={images[0].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-brand-gold text-[9px] font-black uppercase tracking-widest mb-0.5">{images[0].sub}</p>
              <h3 className="text-white font-serif font-bold text-xl">{images[0].label}</h3>
            </div>
          </motion.div>

          {/* Right column — 3 small images */}
          {images.slice(1, 4).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              onClick={() => setLightbox(img)}
              className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
              style={{ height: '132px' }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <h3 className="text-white font-serif font-bold text-sm">{img.label}</h3>
              </div>
            </motion.div>
          ))}


        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold transition-colors"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={lightbox.src} alt={lightbox.label} className="w-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-brand-gold text-[9px] font-black uppercase tracking-widest">{lightbox.sub}</p>
                <h3 className="text-white font-serif font-bold text-xl">{lightbox.label}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
