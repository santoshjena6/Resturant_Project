import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-punjabi-red rounded-full"></div>
              <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">Reservations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earthy-brown mb-6 leading-tight">
              Book Your <br /><span className="text-punjabi-saffron">Table Today</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              Gather your loved ones and let us treat you to a true Punjabi feast. Reserve your table in advance for a seamless dining experience.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
                { icon: '📍', label: 'Address', value: 'Bhubaneswar, Odisha' },
                { icon: '⏰', label: 'Hours', value: 'Mon–Sun: 12:00 PM – 11:30 PM' },
              ].map(info => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-punjabi-saffron/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{info.label}</p>
                    <p className="text-text-main font-semibold text-base">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-cream-dark">
              <h3 className="text-2xl font-serif font-bold text-earthy-brown text-center mb-8">Reserve a Table</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Eg. Arjun Singh"
                    className="w-full border-2 border-cream-dark rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-punjabi-saffron transition-colors bg-cream-bg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full border-2 border-cream-dark rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-punjabi-saffron transition-colors bg-cream-bg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full border-2 border-cream-dark rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-punjabi-saffron transition-colors bg-cream-bg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full border-2 border-cream-dark rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-punjabi-saffron transition-colors bg-cream-bg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Guests</label>
                  <select className="w-full border-2 border-cream-dark rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-punjabi-saffron transition-colors bg-cream-bg">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-punjabi-saffron text-white font-bold py-4 px-8 rounded hover:bg-[#d66516] transition-colors text-base text-center"
              >
                🎉 Confirm Reservation
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
