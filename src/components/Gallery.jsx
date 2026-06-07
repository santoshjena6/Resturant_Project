import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/maharaja_thali_hero.png', label: 'Maharaja Thali', span: 'col-span-2 row-span-2' },
  { src: '/images/inageofresurant.png', label: 'The Ambience', span: 'col-span-1 row-span-1' },
  { src: '/images/tandoori_chicken.png', label: 'Clay Oven Magic', span: 'col-span-1 row-span-1' },
  { src: '/images/dal_makhani.png', label: '24-Hour Dal', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80', label: 'Authentic Spices', span: 'col-span-1 row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <p className="text-brand-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Aesthetics</p>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white italic">VISUAL <span className="text-brand-gold not-italic">NARRATIVE</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-[30px] group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center ring-1 ring-inset ring-brand-gold/30 rounded-[30px] m-4">
                <span className="text-white font-serif font-bold text-2xl italic mb-2">{img.label}</span>
                <div className="w-10 h-0.5 bg-brand-gold"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
