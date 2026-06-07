import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const menuPages = [
  {
    category: 'Dal & Paneer Specialties',
    items: [
      { name: 'Yellow Dal Butter Fry', price: '₹220' },
      { name: 'Dal Shaan-e-Punjab', price: '₹340' },
      { name: 'Paneer Butter Masala', price: '₹310' },
      { name: 'Matar Paneer', price: '₹290' },
      { name: 'Paneer Do-Pyaza', price: '₹310' },
    ]
  },
  {
    category: 'Kebabs & Starters',
    items: [
      { name: 'Paneer Tikka Angare', price: '₹320' },
      { name: 'Chicken Patiala', price: '₹480' },
      { name: 'Murg Tangdi Kebab', price: '₹370' },
      { name: 'Chicken Seekh Kebab', price: '₹380' },
      { name: 'Amritsari Machhi', price: '₹450' },
      { name: 'Tandoori Chicken', price: '₹420' },
    ]
  },
  {
    category: 'Royal Rice & Breads',
    items: [
      { name: 'Butter Naan', price: '₹60' },
      { name: 'Garlic Naan', price: '₹90' },
      { name: 'Veg Dum Biryani', price: '₹380' },
      { name: 'Chicken Biryani', price: '₹450' },
      { name: 'Jeera Rice', price: '₹180' },
    ]
  }
];

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(-1); // -1: Cover, 0: Page 1, etc.
  const totalPages = menuPages.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage >= 0) setCurrentPage(prev => prev - 1);
  };

  const containerVariants = {
    closed: { x: 0 },
    opened: { x: '25%' } 
  };

  return (
    <section id="menu" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-black text-brand-brown mb-16 uppercase tracking-tighter"
        >
          ROYAL <span className="text-brand-gold italic">MENU</span>
        </motion.h2>

        <div className="flex justify-center items-center h-[600px] md:h-[750px] perspective-[3000px]">
          <motion.div 
            animate={currentPage === -1 ? "closed" : "opened"}
            variants={containerVariants}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-[320px] h-[480px] md:w-[450px] md:h-[650px] preserve-3d"
          >
            
            {/* BASE PAGE */}
            <div className="absolute inset-0 bg-[#FDFBF7] shadow-xl rounded-r-lg border border-black/5 z-0 flex flex-col p-8 md:p-12">
               <div className="flex-grow flex flex-col items-center justify-center text-brand-maroon/10">
                  <img src="/images/logo.png" alt="Logo" className="w-16 h-16 opacity-10 grayscale mb-4" />
                  <div className="text-[10px] font-black uppercase tracking-[0.5em]">The Imperial Kitchen</div>
               </div>
            </div>

            {/* Menu Pages (Reverse map for stacking) */}
            {[...menuPages].reverse().map((page, revIndex) => {
              const index = totalPages - 1 - revIndex;
              const isFlipped = currentPage > index;
              return (
                <PageFlip 
                  key={index}
                  isFlipped={isFlipped}
                  zIndex={isFlipped ? 50 + index : 50 - index}
                  front={<div className="absolute inset-0 bg-[#FDFBF7] shadow-2xl rounded-r-lg border-l border-black/5 p-8 md:p-12 flex flex-col">
                    <MenuContent page={page} pageNum={index + 1} total={totalPages} isVisible={currentPage === index} />
                  </div>}
                  back={<div className="absolute inset-0 bg-[#FDFBF7] shadow-inner rounded-l-lg border-r-[12px] border-brand-maroon/10 p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden">
                     <img src="/images/logo.png" alt="Logo" className="w-20 h-20 opacity-5 mb-4" />
                     <div className="text-[10px] font-black text-brand-maroon/40 uppercase tracking-widest">Page {index + 1} Finished</div>
                  </div>}
                  onClick={() => !isFlipped && handleNext()}
                />
              );
            })}

            {/* Cover Page */}
            <PageFlip 
              isFlipped={currentPage >= 0}
              zIndex={currentPage >= 0 ? 40 : 100}
              front={<div className="absolute inset-0 rounded-r-lg overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)]">
                <img src="/images/menu.png" alt="Menu Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-16 inset-x-0 text-center">
                   <div className="inline-block px-8 py-3 bg-brand-gold text-brand-brown rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">Open Menu</div>
                </div>
              </div>}
              back={<div className="absolute inset-0 bg-[#FDFBF7] shadow-inner rounded-l-lg p-10 flex flex-col items-center justify-center border-r-[12px] border-brand-maroon/20 overflow-hidden">
                <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mb-6 rounded-full shadow-lg" />
                <h3 className="text-brand-brown font-serif text-2xl italic">Welcome to</h3>
                <h4 className="text-brand-maroon font-serif text-4xl font-black uppercase tracking-widest mt-2">Kake Da Minar</h4>
                <div className="w-16 h-[2px] bg-brand-maroon my-8"></div>
                <p className="text-brand-brown/70 text-xs uppercase tracking-widest text-center font-bold">Authentic Punjabi Cuisine <br/> Since 1990</p>
              </div>}
              onClick={() => currentPage === -1 && handleNext()}
            />

            {/* CONTROLS */}
            <div className="absolute -bottom-24 inset-x-0 flex justify-between items-center z-[200]">
               <button onClick={handlePrev} disabled={currentPage === -1} className={`flex items-center gap-2 px-6 py-2 rounded-full border border-brand-maroon/20 text-brand-maroon font-black text-[10px] uppercase tracking-widest bg-white hover:bg-brand-maroon hover:text-white transition-all ${currentPage === -1 ? 'opacity-0' : 'shadow-lg'}`}><ChevronLeft size={16} /> Previous</button>
               <button onClick={handleNext} disabled={currentPage === totalPages - 1} className={`flex items-center gap-2 px-6 py-2 rounded-full border border-brand-maroon/20 text-brand-maroon font-black text-[10px] uppercase tracking-widest bg-white hover:bg-brand-maroon hover:text-white transition-all ${currentPage === totalPages - 1 ? 'opacity-0' : 'shadow-lg'}`}>Next <ChevronRight size={16} /></button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PageFlip = ({ isFlipped, front, back, zIndex, onClick }) => (
  <motion.div
    initial={false}
    animate={{ rotateY: isFlipped ? -180 : 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{ transformStyle: 'preserve-3d', zIndex }}
    onClick={onClick}
    className="absolute inset-0 w-full h-full cursor-pointer origin-left"
  >
    <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}>{front}</div>
    <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>{back}</div>
  </motion.div>
);

const MenuContent = ({ page, pageNum, total, isVisible }) => (
  <div className="flex flex-col h-full text-left">
    <div className="mb-8 border-l-4 border-brand-maroon pl-4">
      <p className="text-[10px] font-black text-brand-maroon uppercase tracking-widest mb-1">Chapter {pageNum}</p>
      <h4 className="text-2xl md:text-3xl font-serif font-black text-brand-maroon uppercase tracking-tight">{page.category}</h4>
    </div>
    <div className="space-y-4 md:space-y-6 flex-grow">
      {page.items.map((item, i) => (
        <div key={i} className="flex justify-between items-end border-b border-brand-maroon/10 pb-2">
          <div className="flex flex-col"><span className="font-bold text-brand-brown">{item.name}</span><span className="text-[10px] text-brand-maroon/40 font-bold uppercase tracking-widest">Chef Special</span></div>
          <span className="font-display text-xl md:text-2xl font-black text-brand-maroon">{item.price}</span>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center text-brand-maroon/20 text-[10px] font-black uppercase tracking-[0.3em]">Royal Legacy Since 1990</div>
  </div>
);

export default MenuBook;
