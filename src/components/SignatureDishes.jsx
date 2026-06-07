import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const dishes = [
  {
    name: 'Maharaja Non-Veg Thali',
    desc: 'The definitive royal feast. Tandoori Chicken, Mutton Rogan Josh, Dal Makhani, Pulao & Butter Naan.',
    img: '/images/maharaja_thali_hero.png',
    price: '₹899',
    tag: 'Elite Choice',
    veg: false,
  },
  {
    name: 'Tandoori Chicken',
    desc: 'Marinated with 21 hand-picked spices, charred in a traditional clay tandoor for smoky perfection.',
    img: '/images/tandoori_chicken.png',
    price: '₹450',
    tag: 'Iconic',
    veg: false,
  },
  {
    name: 'Dal Makhani',
    desc: 'Slow-simmered for 24 hours with fresh cream and Desi Ghee for a velvety texture.',
    img: '/images/dal_makhani.png',
    price: '₹290',
    tag: 'Legacy',
    veg: true,
  },
  {
    name: 'Chicken Patiala',
    desc: 'Imperial Patiala-style chicken wrapped in a golden omelet — a visual and flavorful masterpiece.',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80',
    price: '₹420',
    tag: 'Signature',
    veg: false,
  },
];

const SignatureDishes = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-brand-saffron text-xs font-black uppercase tracking-[0.4em] mb-4">Curation</p>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-brown leading-tight">
              SIGNATURE <br />
              <span className="text-brand-gold italic">COLLECTION</span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-sm mb-2 font-light">
            Each dish is a curated masterpiece, bridging centuries of Punjabi tradition with modern culinary excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-brand-cream-dark">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-brown shadow-lg">
                  {dish.tag}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif font-bold text-brand-brown group-hover:text-brand-gold transition-colors underline decoration-brand-gold/0 group-hover:decoration-brand-gold underline-offset-8 duration-500">
                    {dish.name}
                  </h3>
                </div>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  {dish.desc}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-serif font-black text-brand-brown">{dish.price}</span>
                  <button className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all group-hover:scale-110">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#full-menu" className="inline-flex items-center gap-4 text-brand-brown font-black text-[11px] uppercase tracking-[0.3em] group">
            View the Complete Imperial Menu
            <div className="w-12 h-px bg-brand-gold transition-all group-hover:w-20"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
