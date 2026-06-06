import React from 'react';
import { motion } from 'framer-motion';

const dishes = [
  {
    name: 'Maharaja Non-Veg Thali',
    desc: 'A royal spread — Tandoori Chicken, Mutton Curry, Dal Makhani, Pulao & Butter Naan.',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80',
    price: '₹899',
    tag: '🏆 Bestseller',
    veg: false,
  },
  {
    name: 'Tandoori Chicken',
    desc: 'Marinated in yogurt & secret spices, roasted to perfection in our clay tandoor.',
    img: '/images/tandoori_chicken.png',
    price: '₹450',
    tag: '🔥 Fan Favourite',
    veg: false,
  },
  {
    name: 'Dal Makhani',
    desc: 'Slow-cooked black lentils simmered overnight with fresh cream & desi ghee.',
    img: '/images/dal_makhani.png',
    price: '₹290',
    tag: '💛 Must Try',
    veg: true,
  },
  {
    name: 'Chicken Patiala',
    desc: 'A rich, creamy Patiala-style chicken curry wrapped in a golden omelet.',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80',
    price: '₹420',
    tag: '👨‍🍳 Chef Special',
    veg: false,
  },
  {
    name: 'Patiala Lassi',
    desc: 'The legendary thick sweet lassi topped with malai, dry fruits & a hint of saffron. Served chilled in a brass glass.',
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80',
    price: '₹150',
    tag: '🥛 Our Signature',
    veg: true,
  },
  {
    name: 'Butter Chicken',
    desc: 'Tender chicken pieces in a velvety, mildly spiced tomato-cream gravy with fresh butter.',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80',
    price: '₹480',
    tag: '⭐ All-Time Fav',
    veg: false,
  },
];

const SignatureDishes = () => {
  return (
    <section id="dishes" className="py-20 md:py-28 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-punjabi-saffron"></div>
            <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">From Our Kitchen</span>
            <div className="h-px w-12 bg-punjabi-saffron"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-earthy-brown">
            Signature <span className="text-punjabi-saffron">Dishes</span>
          </h2>
          <p className="text-text-muted mt-3 text-base max-w-xl mx-auto">
            Each dish is a story — slow-cooked with love, secret spices, and the spirit of Punjab.
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-card border border-cream-dark group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Veg/Non-veg dot */}
                <div className={`absolute top-3 right-3 w-5 h-5 rounded-sm border-2 flex items-center justify-center bg-white ${dish.veg ? 'border-green-600' : 'border-red-600'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${dish.veg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                </div>
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-punjabi-saffron text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {dish.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-earthy-brown mb-2 group-hover:text-punjabi-saffron transition-colors leading-tight">
                  {dish.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{dish.desc}</p>
                <div className="flex items-center justify-between border-t border-cream-dark pt-4">
                  <span className="text-punjabi-saffron font-black text-2xl">{dish.price}</span>
                  <button className="bg-earthy-brown text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full hover:bg-punjabi-saffron transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#menu"
            className="inline-block border-2 border-earthy-brown text-earthy-brown font-bold py-3 px-10 rounded-full hover:bg-earthy-brown hover:text-white transition-colors text-sm tracking-wide"
          >
            View Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
