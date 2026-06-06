import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Tandoor Se', 'Handi Se', 'Breads', 'Meetha', 'Thandai'];

const menuItems = [
  { name: 'Paneer Tikka', price: '₹250', cat: 'Tandoor Se', desc: 'Cottage cheese in spiced yogurt marinade' },
  { name: 'Tandoori Chicken', price: '₹450', cat: 'Tandoor Se', desc: 'Whole chicken, clay oven roasted' },
  { name: 'Butter Chicken', price: '₹480', cat: 'Handi Se', desc: 'Chicken in velvety tomato-cream gravy' },
  { name: 'Dal Makhani', price: '₹290', cat: 'Handi Se', desc: 'Black lentils slow-cooked overnight' },
  { name: 'Chicken Patiala', price: '₹420', cat: 'Handi Se', desc: 'Rich Patiala curry in golden omelet' },
  { name: 'Mutton Rogan Josh', price: '₹550', cat: 'Handi Se', desc: 'Slow-braised mutton in Kashmiri spices' },
  { name: 'Butter Naan', price: '₹60', cat: 'Breads', desc: 'Soft leavened bread from tandoor' },
  { name: 'Garlic Naan', price: '₹80', cat: 'Breads', desc: 'Topped with garlic and fresh coriander' },
  { name: 'Gulab Jamun', price: '₹120', cat: 'Meetha', desc: 'Soft dumplings in rose sugar syrup' },
  { name: 'Kheer', price: '₹100', cat: 'Meetha', desc: 'Slow-cooked rice pudding with dry fruits' },
  { name: 'Patiala Lassi', price: '₹150', cat: 'Thandai', desc: 'Thick sweet lassi with malai & dry fruits' },
  { name: 'Jaljeera', price: '₹90', cat: 'Thandai', desc: 'Refreshing cumin-mint drink' },
];

const Menu = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? menuItems : menuItems.filter(m => m.cat === active);

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-punjabi-red"></div>
            <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">Our Menu</span>
            <div className="h-px w-12 bg-punjabi-red"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earthy-brown">
            Dhaba <span className="text-punjabi-saffron">Menu</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                  active === cat
                    ? 'bg-punjabi-saffron border-punjabi-saffron text-white shadow-sm'
                    : 'border-earthy-brown/20 text-text-muted hover:border-punjabi-saffron hover:text-punjabi-saffron bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu List */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start justify-between gap-4 px-4 py-5 border-b border-earthy-brown/10 hover:bg-white transition-colors group"
              >
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-earthy-brown text-lg group-hover:text-punjabi-saffron transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-text-muted text-sm mt-1 italic">{item.desc}</p>
                </div>
                <span className="text-punjabi-saffron font-bold text-lg font-serif whitespace-nowrap">{item.price}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <button className="border-2 border-earthy-brown text-earthy-brown font-bold py-3 px-8 rounded hover:bg-earthy-brown hover:text-white transition-colors text-sm inline-flex items-center gap-2">
            📄 Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
