import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mohanty',
    role: 'Culinary Critic',
    initials: 'RM',
    color: 'bg-orange-500',
    text: 'The Maharaja Non-Veg Thali redefined my expectations of Punjabi cuisine in Odisha. Pure artistry — every bowl tells a story of tradition.',
    rating: 5,
    date: 'June 2025',
    platform: 'Google',
  },
  {
    name: 'Sonia Sharma',
    role: 'Food Journalist',
    initials: 'SS',
    color: 'bg-rose-500',
    text: 'A masterclass in balancing authentic heritage with modern boutique dining. The Dal Shaan-e-Punjab alone is worth the drive. Simply sublime.',
    rating: 5,
    date: 'May 2025',
    platform: 'Zomato',
  },
  {
    name: 'Amit Patnaik',
    role: 'Art Director',
    initials: 'AP',
    color: 'bg-blue-500',
    text: 'The ambience alone is worth the visit, but the Chicken Patiala is the real star. Exceptional service and food. Highly recommended!',
    rating: 5,
    date: 'April 2025',
    platform: 'Google',
  },
];

const Stars = ({ count = 5, size = 14 }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ZomatoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#E23744">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);

const Reviews = () => (
  <section id="reviews" className="py-16 bg-brand-brown overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-brand-saffron text-[10px] font-black uppercase tracking-[0.45em] mb-3">What Our Guests Say</p>
        <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
          GUEST <span className="text-brand-gold italic">REFLECTIONS</span>
        </h2>

        {/* Overall rating bar */}
        <div className="inline-flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
          <div className="text-center">
            <div className="text-4xl font-serif font-black text-brand-gold">4.8</div>
            <Stars size={12} />
            <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">500+ Reviews</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex flex-col gap-1.5">
            {[5,4,3].map((star, i) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-white/40 text-[9px] w-3">{star}</span>
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold rounded-full" style={{ width: i === 0 ? '88%' : i === 1 ? '9%' : '3%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-xl"
          >
            {/* Top row — platform + stars */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {t.platform === 'Google' ? <GoogleIcon /> : <ZomatoIcon />}
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{t.platform}</span>
              </div>
              <Stars size={12} count={t.rating} />
            </div>

            {/* Quote */}
            <p className="text-brand-brown text-sm leading-relaxed font-light flex-1">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                {t.initials}
              </div>
              <div>
                <h4 className="font-bold text-brand-brown text-sm">{t.name}</h4>
                <div className="flex items-center gap-2">
                  <p className="text-[9px] uppercase font-black tracking-widest text-brand-gold">{t.role}</p>
                  <span className="text-gray-300">·</span>
                  <p className="text-[9px] text-gray-400">{t.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <p className="text-white/30 text-xs font-light">
          Rated <span className="text-brand-gold font-bold">4.8 / 5</span> across Google & Zomato
        </p>
      </div>

    </div>
  </section>
);

export default Reviews;
