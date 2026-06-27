import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const thaliItems = [
  { id: 'gobi', name: 'Aloo Gobi Masala', x: '21%', y: '32%', w: '18%', h: '18%', desc: 'Classic cauliflower and potatoes braised with ginger and roasted cumin.' },
  { id: 'chicken', name: 'Royal Chicken Curry', x: '38%', y: '16%', w: '18%', h: '18%', desc: 'Tender chicken slow-cooked in a rich blend of traditional spices.' },
  { id: 'mutton', name: 'Mutton Rogan Josh', x: '62%', y: '16%', w: '18%', h: '18%', desc: 'Aromatic lamb curry with a signature blend of Kashmiri spices.' },
  { id: 'dal', name: 'Dal Shaan-e-Punjab', x: '77%', y: '32%', w: '18%', h: '18%', desc: '24-hour slow-simmered black lentils with fresh cream & Desi Ghee.' },
  { id: 'paneer', name: 'Paneer Butter Masala', x: '77%', y: '65%', w: '18%', h: '18%', desc: 'Cubes of fresh cottage cheese in a velvety tomato and butter gravy.' },
  { id: 'biryani', name: 'Saffron Biryani', x: '42%', y: '55%', w: '28%', h: '30%', desc: 'Fragrant Basmati rice layers with saffron and premium spices.' },
  { id: 'naan', name: 'Butter Naan', x: '60%', y: '55%', w: '20%', h: '35%', desc: 'Classic clay-oven baked bread, perfectly buttered.' }
];

const InteractiveThali = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="thali" className="py-14 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-8"
        >
          <p className="text-brand-maroon text-[10px] font-black uppercase tracking-[0.6em] mb-3">Discovery</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-brown mb-3 uppercase tracking-tighter text-center w-full">
            THE MAHARAJA <span className="text-brand-maroon italic">FEAST</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-muted font-light text-sm">
            Hover on any dish to reveal its story.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-xl aspect-square md:aspect-[1.3/1] rounded-[1.5rem] overflow-hidden shadow-xl bg-white border border-brand-maroon/5">
            <img 
               src="/images/thali_interactive.png" 
               alt="Maharaja Thali" 
               className="w-full h-full object-cover"
            />

            {/* Interactive zones with pulsing gold dot hints */}
            {thaliItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(hoveredItem?.id === item.id ? null : item)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                style={{ left: item.x, top: item.y, width: item.w, height: item.h }}
              >
                {/* Pulsing gold dot — top-left corner of each zone */}
                <span
                  className={`absolute top-1 left-1 w-3 h-3 rounded-full border-2 border-brand-gold bg-brand-gold/30 animate-pulse-gold transition-opacity duration-300 ${
                    hoveredItem?.id === item.id ? 'opacity-100 bg-brand-gold' : 'opacity-70'
                  }`}
                />
              </div>
            ))}

            {/* Hover Tooltip - Minimalist & Premium */}
            <AnimatePresence>
              {hoveredItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-3 right-3 md:w-52 bg-brand-brown/90 backdrop-blur-xl px-4 py-3 rounded-xl shadow-xl z-30 border-t border-white/20"
                >
                  <motion.h4
                    key={hoveredItem.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-serif font-black text-white mb-1 text-left"
                  >
                    {hoveredItem.name}
                  </motion.h4>
                  <p className="text-white/60 text-[11px] leading-snug text-left italic">"{hoveredItem.desc}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveThali;
