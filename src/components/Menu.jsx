import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  Starters: [
    { name: 'Paneer Tikka Angare', price: '₹320', desc: 'Charred cottage cheese cubes, smoked with aromatic coal.' },
    { name: 'Amritsari Machhi', price: '₹450', desc: 'Crispy carom-scented fish, a street-food classic refined.' },
    { name: 'Seekh Kebab', price: '₹380', desc: 'Elegant lamb skewers infused with secret masalas.' },
  ],
  'Imperial Mains': [
    { name: 'Murg Patiala', price: '₹480', desc: 'Signature chicken wrapped in a silken omelette.' },
    { name: 'Dal Makhani', price: '₹290', desc: 'Velvety black lentils, slow-cooked for 24 hours.' },
    { name: 'Sarson Da Saag', price: '₹290', desc: 'The heart of Punjab, served with white butter.' },
  ],
  Thalis: [
    { name: 'Maharaja Non-Veg', price: '₹899', desc: 'The complete imperial feast for the elite diner.' },
    { name: 'Maharaja Veg', price: '₹750', desc: 'Grand vegetarian spread of seasonal treasures.' },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20">
          <div>
            <p className="text-brand-saffron text-xs font-black uppercase tracking-[0.4em] mb-4">Selection</p>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-brown">THE <span className="text-brand-gold italic">MENU</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-10 mt-10 md:mt-0">
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all relative pb-2 ${
                  activeTab === cat ? 'text-brand-brown' : 'text-text-muted hover:text-brand-gold'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12"
            >
              {menuData[activeTab].map((item, i) => (
                <div key={i} className="group border-b border-brand-gold/10 pb-10">
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-2xl font-serif font-bold text-brand-brown group-hover:text-brand-gold transition-colors">{item.name}</h4>
                    <span className="text-xl font-serif font-black text-brand-maroon">{item.price}</span>
                  </div>
                  <p className="text-text-muted font-light leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 flex justify-center">
          <button className="bg-brand-brown text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors">
            Download Full Menu PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
