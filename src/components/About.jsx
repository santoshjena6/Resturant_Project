import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { end: 15,   suffix: '+',  label: 'Years of Legacy'  },
  { end: 6000, suffix: '+',  label: 'Happy Guests'     },
  { end: 100,  suffix: '%',  label: 'Pure Desi Ghee'   },
  { end: 4.8,  suffix: '★', label: 'Guest Rating'     },
];

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const isFloat  = end % 1 !== 0;
        const duration = 1800;
        const t0       = performance.now();
        const tick = (now) => {
          const p     = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(isFloat ? parseFloat((eased * end).toFixed(1)) : Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">

        {/* Image with decorative offset frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 border-2 border-brand-gold/25 rounded-3xl translate-x-4 translate-y-4 z-0" />
            <div className="relative z-10 aspect-square bg-brand-cream/40 rounded-3xl overflow-hidden border border-brand-gold/20 shadow-xl">
              <img src="/images/About.png" alt="Our Legacy" className="w-full h-full object-contain p-6" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-brand-gold/20 z-0" />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div>
            <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-brown leading-tight">
              OUR <span className="text-brand-gold italic">LEGACY</span>
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed font-light">
            <p>
              Since <strong className="text-brand-brown">2009</strong>, Kake Da Minar has been a
              landmark of authentic Punjabi dining in Bhubaneswar — started with a simple vision:
              to bring the true heart of Punjab to your plate.
            </p>
            <p>
              Every dish is a testament to purity. From hand-sourced spices to 100% pure Desi Ghee,
              we never compromise on the quality that defines us.
            </p>
            <p>
              Join us to experience the warmth of traditional hospitality and the richness of
              century-old heritage.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-block text-brand-gold font-black uppercase tracking-widest text-xs
                       border-b-2 border-brand-gold pb-1 hover:text-brand-maroon
                       hover:border-brand-maroon transition-all duration-300"
          >
            Explore the Menu →
          </a>
        </motion.div>
      </div>

      {/* Stat counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-brand-cream-dark pt-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center py-6 px-3 rounded-2xl bg-brand-cream hover:bg-brand-cream-dark
                       transition-colors duration-500 group cursor-default"
          >
            <div className="text-3xl md:text-4xl font-serif font-black text-brand-maroon mb-1
                            group-hover:text-brand-gold transition-colors duration-500">
              <CountUp end={stat.end} suffix={stat.suffix} />
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest text-text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
