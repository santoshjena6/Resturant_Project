import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const LocationContact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Details */}
          <div className="lg:w-5/12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-brand-saffron text-[10px] font-black uppercase tracking-[0.4em] mb-3">Find Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-brown leading-tight mb-8">
                FIND US IN <br />
                <span className="text-brand-gold italic">BHUBANESWAR</span>
              </h2>

              <div className="grid grid-cols-1 gap-7">
                <div className="flex gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-cream-dark flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                    <MapPin className="text-brand-brown group-hover:text-white transition-colors" size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-1.5">Address</h4>
                    <p className="text-sm font-light text-brand-brown max-w-xs leading-relaxed">
                      Manipal Hospital, Near OMFED Square, Aryapalli, Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-cream-dark flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                    <Phone className="text-brand-brown group-hover:text-white transition-colors" size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-1.5">Connection</h4>
                    <p className="text-xl font-serif font-black text-brand-brown">+91 94371 23456</p>
                    <p className="text-xs text-text-muted mt-0.5 uppercase tracking-widest font-bold">namaste@kakedaminar.com</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-cream-dark flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                    <Clock className="text-brand-brown group-hover:text-white transition-colors" size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-1.5">Service Hours</h4>
                    <p className="text-sm font-light text-brand-brown">12:00 PM – 4:00 PM</p>
                    <p className="text-sm font-light text-brand-brown">7:00 PM – 11:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-brown text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-brand-gold transition-all shadow-xl"
                >
                  <Navigation size={16} />
                  Route via Google Maps
                </a>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-7/12 rounded-3xl overflow-hidden border border-brand-gold/10 relative min-h-[380px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968.183424168!2d85.80!3d20.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiTiA4NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border-none"
              allowFullScreen="" 
              loading="lazy"
              title="Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationContact;
