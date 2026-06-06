import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/inageofresurant.png', label: 'Our Restaurant' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80', label: 'Dining Area' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80', label: 'Ambiance' },
  { src: '/images/tandoori_chicken.png', label: 'Tandoori Chicken' },
  { src: '/images/dal_makhani.png', label: 'Dal Makhani' },
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80', label: 'Thali Platter' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-punjabi-saffron"></div>
            <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">Gallery</span>
            <div className="h-px w-12 bg-punjabi-saffron"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earthy-brown">
            Dhaba <span className="text-punjabi-saffron">Memories</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            A glimpse into the warmth, food, and beautiful moments that make Kake Da Minar special.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl shadow-card border-2 border-white group ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-72 md:h-80' : 'h-52 md:h-64'}`}
              />
              {/* Label overlay on hover */}
              <div className="absolute inset-0 bg-earthy-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <span className="text-white font-serif font-bold text-lg">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-punjabi-saffron font-bold border-b-2 border-punjabi-saffron/30 hover:border-punjabi-saffron transition-colors text-sm uppercase tracking-widest pb-1"
          >
            📸 Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
