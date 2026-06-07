import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Mohanty",
    role: "Culinary Critic",
    text: "The Maharaja Non-Veg Thali redefined my expectations of Punjabi cuisine in Odisha. Pure artistry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Sonia Sharma",
    role: "Journalist",
    text: "A masterclass in balancing authentic heritage with modern boutique dining. Simply sublime.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Amit Patnaik",
    role: "Art Director",
    text: "The ambience alone is worth the visit, but the Chicken Patiala is the real star. Exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-brand-saffron text-xs font-black uppercase tracking-[0.4em] mb-4 text-center">Voices</p>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-brown">GUEST <span className="text-brand-gold italic">REFLECTIONS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[40px] shadow-premium relative group border border-brand-gold/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-brown text-xl font-serif italic leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div>
                  <h4 className="font-bold text-brand-brown text-sm uppercase tracking-wider">{t.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-gold mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
