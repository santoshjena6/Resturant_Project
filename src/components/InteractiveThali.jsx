import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const thaliItems = [
  { id: 'gobi', name: 'Aloo Gobi Masala', x: '21%', y: '32%', w: '18%', h: '18%', desc: 'Classic cauliflower and potatoes braised with ginger and roasted cumin.' },
  { id: 'chicken', name: 'Royal Chicken Curry', x: '38%', y: '16%', w: '18%', h: '18%', desc: 'Tender chicken slow-cooked in a rich blend of traditional spices.' },
  { id: 'mutton', name: 'Mutton Rogan Josh', x: '62%', y: '16%', w: '18%', h: '18%', desc: 'Aromatic lamb curry with a signature blend of Kashmiri spices.' },
  { id: 'dal', name: 'Dal Shaan-e-Punjab', x: '77%', y: '32%', w: '18%', h: '18%', desc: '24-hour slow-simmered black lentils with fresh cream & Desi Ghee.' },
  { id: 'paneer', name: 'Paneer Butter Masala', x: '77%', y: '65%', w: '18%', h: '18%', desc: 'Cubes of fresh cottage cheese in a velvety tomato and butter gravy.' },
  { id: 'raita', name: 'Mixed Raita', x: '24%', y: '72%', w: '22%', h: '35%', desc: 'Cooling yogurt dip with garden fresh vegetables and roasted cumin.' },
  { id: 'biryani', name: 'Saffron Biryani', x: '42%', y: '55%', w: '28%', h: '30%', desc: 'Fragrant Basmati rice layers with saffron and premium spices.' },
  { id: 'naan', name: 'Butter Naan', x: '60%', y: '55%', w: '20%', h: '35%', desc: 'Classic clay-oven baked bread, perfectly buttered.' }
];

const InteractiveThali = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="thali" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-12"
        >
          <p className="text-brand-maroon text-[10px] font-black uppercase tracking-[0.6em] mb-4">Discovery</p>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-brown mb-6 uppercase tracking-tighter text-center w-full">
            THE MAHARAJA <span className="text-brand-maroon italic">FEAST</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted font-light text-lg">
            Tap or hover on any dish to reveal its story.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-4xl aspect-square md:aspect-[1.3/1] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-2 border-brand-maroon/5">
            <img 
               src="/images/thali_interactive.png" 
               alt="Maharaja Thali" 
               className="w-full h-full object-cover"
            />

            {/* COMPLETELY INVISIBLE INTERACTIVE ZONES */}
            {thaliItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(item)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                style={{ 
                  left: item.x, 
                  top: item.y, 
                  width: item.w, 
                  height: item.h,
                  backgroundColor: 'transparent' // Completely invisible
                }}
              />
            ))}

            {/* Hover Tooltip - Minimalist & Premium */}
            <AnimatePresence>
              {hoveredItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 right-6 left-6 md:left-auto md:w-80 bg-brand-brown/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl z-30 border-t border-white/20"
                >
                  <motion.h4 
                    key={hoveredItem.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-serif font-black text-white mb-2 text-left"
                  >
                    {hoveredItem.name}
                  </motion.h4>
                  <p className="text-white/60 text-sm leading-relaxed text-left italic">"{hoveredItem.desc}"</p>
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
