import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

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
  const [currentPage, setCurrentPage] = useState(-1);
  const totalPages = menuPages.length;
  const sectionRef = useRef(null);
  const autoOpened = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoOpened.current) {
          // Section came into view — auto-open after brief delay
          autoOpened.current = true;
          setTimeout(() => setCurrentPage(0), 1200);
        } else if (!entry.isIntersecting && autoOpened.current) {
          // Section left view — close book and reset so it reopens next visit
          autoOpened.current = false;
          setCurrentPage(-1);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage >= 0) setCurrentPage(prev => prev - 1);
  };

  const containerVariants = {
    closed: { x: 0 },
    opened: { x: '50%' },
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-14 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/menu-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-black text-brand-brown mb-10 uppercase tracking-tighter"
        >
          ROYAL <span className="text-brand-gold italic">MENU</span>
        </motion.h2>

        <div className="flex justify-center items-center h-[520px] md:h-[650px] perspective-[3000px]">
          <motion.div
            animate={currentPage === -1 ? "closed" : "opened"}
            variants={containerVariants}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-[280px] h-[420px] md:w-[400px] md:h-[580px] preserve-3d"
          >

            {/* Next page arrow — visible on right edge of current page */}
            {currentPage < totalPages - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleNext}
                className="absolute -right-14 top-1/2 -translate-y-1/2 z-[300] flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ChevronLeft size={20} className="text-brand-brown rotate-180" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-brand-gold/80">Next</span>
              </motion.button>
            )}
            
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
                  front={
                    <div className="absolute inset-0 bg-[#FDFBF7] shadow-2xl rounded-r-lg border-l border-black/5 p-6 md:p-10 flex flex-col">
                      <MenuContent page={page} pageNum={index + 1} total={totalPages} isVisible={currentPage === index} />
                    </div>
                  }
                  back={
                    <div className="absolute inset-0 bg-[#FDFBF7] shadow-inner rounded-l-lg border-r-[12px] border-brand-maroon/10 p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden group">
                      <img src="/images/logo.png" alt="Logo" className="w-16 h-16 opacity-5 mb-3" />
                      <div className="text-[10px] font-black text-brand-maroon/30 uppercase tracking-widest mb-3">Page {index + 1} Finished</div>
                      <div className="flex items-center gap-1 text-brand-maroon/30 text-[9px] font-black uppercase tracking-widest">
                        <ChevronLeft size={12} /> tap to go back
                      </div>
                    </div>
                  }
                  onFrontClick={() => !isFlipped && handleNext()}
                  onBackClick={() => isFlipped && handlePrev()}
                />
              );
            })}

            {/* Cover Page */}
            <PageFlip
              isFlipped={currentPage >= 0}
              zIndex={currentPage >= 0 ? 40 : 100}
              front={
                <div className="absolute inset-0 rounded-r-lg overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)]">
                  <img src="/images/menu.png" alt="Menu Cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-12 inset-x-0 text-center">
                    <div className="inline-block px-6 py-2.5 bg-brand-gold text-brand-brown rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">Open Menu</div>
                  </div>
                </div>
              }
              back={
                <div className="absolute inset-0 bg-[#FDFBF7] shadow-inner rounded-l-lg p-8 flex flex-col items-center justify-center border-r-[12px] border-brand-maroon/20 overflow-hidden">
                  <img src="/images/logo.png" alt="Logo" className="w-14 h-14 mb-3 rounded-full shadow-lg" />
                  <h3 className="text-brand-brown font-serif text-base italic">Welcome to</h3>
                  <h4 className="text-brand-maroon font-serif text-xl font-black uppercase tracking-widest mt-1">Kake Da Minar</h4>
                  <div className="w-10 h-[2px] bg-brand-maroon my-4" />
                  <p className="text-brand-brown/70 text-xs uppercase tracking-widest text-center font-bold">Authentic Punjabi Cuisine <br /> Since 2009</p>
                  <div className="flex items-center gap-1 text-brand-maroon/30 text-[9px] font-black uppercase tracking-widest mt-4">
                    <ChevronLeft size={12} /> tap to close
                  </div>
                </div>
              }
              onFrontClick={() => currentPage === -1 && handleNext()}
              onBackClick={() => currentPage >= 0 && handlePrev()}
            />


          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PageFlip = ({ isFlipped, front, back, zIndex, onFrontClick, onBackClick }) => (
  <motion.div
    initial={false}
    animate={{ rotateY: isFlipped ? -180 : 0 }}
    transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
    style={{ transformStyle: 'preserve-3d', zIndex }}
    className="absolute inset-0 w-full h-full origin-left"
  >
    <div
      onClick={onFrontClick}
      className="absolute inset-0 w-full h-full cursor-pointer"
      style={{ backfaceVisibility: 'hidden' }}
    >
      {front}
    </div>
    <div
      onClick={onBackClick}
      className="absolute inset-0 w-full h-full cursor-pointer"
      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
    >
      {back}
    </div>
  </motion.div>
);

const MenuContent = ({ page, pageNum, total, isVisible }) => (
  <div className="flex flex-col h-full text-left">
    <div className="mb-5 border-l-4 border-brand-maroon pl-3">
      <p className="text-[9px] font-black text-brand-maroon uppercase tracking-widest mb-1">Chapter {pageNum}</p>
      <h4 className="text-lg md:text-xl font-serif font-black text-brand-maroon uppercase tracking-tight">{page.category}</h4>
    </div>
    <div className="space-y-3 md:space-y-4 flex-grow">
      {page.items.map((item, i) => (
        <div key={i} className="flex justify-between items-end border-b border-brand-maroon/10 pb-1.5">
          <div className="flex flex-col"><span className="font-bold text-brand-brown text-sm">{item.name}</span><span className="text-[9px] text-brand-maroon/40 font-bold uppercase tracking-widest">Chef Special</span></div>
          <span className="font-display text-lg md:text-xl font-black text-brand-maroon">{item.price}</span>
        </div>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-between">
      <div className="text-brand-maroon/20 text-[9px] font-black uppercase tracking-[0.3em]">Royal Legacy · Since 2009</div>
      <div className="flex items-center gap-1 text-brand-maroon/40 text-[9px] font-black uppercase tracking-widest animate-pulse">
        click for next &rsaquo;
      </div>
    </div>
  </div>
);

export default MenuBook;
