import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Simple Clean Image Feature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square bg-brand-cream/30 rounded-3xl overflow-hidden border border-brand-gold/10">
              <img
                src="/images/About.png"
                alt="Our Legacy"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </motion.div>

          {/* Clean Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-brown">
              OUR <span className="text-brand-gold italic">LEGACY</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-muted leading-relaxed font-light">
              <p>
                Since <strong className="text-brand-brown">2009</strong>, Kake Da Minar has been a landmark of authentic Punjabi dining in Bhubaneswar. We started with a simple vision: to bring the true heart of Punjab to your plate.
              </p>
              <p>
                Every dish we serve is a testament to purity. From the hand-sourced spices to the 100% pure Desi Ghee in our kitchens, we never compromise on the quality that defines us.
              </p>
              <p>
                 Join us to experience the warmth of traditional hospitality and the richness of century-old heritage.
              </p>
            </div>

            <div className="pt-6">
               <a href="#menu" className="text-brand-gold font-black uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-1 hover:text-brand-maroon hover:border-brand-maroon transition-all">Explore the Menu</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
