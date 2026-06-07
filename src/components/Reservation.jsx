import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-brown rounded-[50px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          
          {/* Info Side */}
          <div className="flex-1 p-12 md:p-16 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-brand-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Concierge</p>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 leading-tight">
                SECURE YOUR <br />
                <span className="text-brand-gold italic">ROYAL SEAT</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-sm">
                Join us for an evening of luxury, where every table is treated with the dignity of an imperial court.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">Instant Booking</h4>
                    <p className="text-brand-gold font-serif text-2xl font-bold">+91 94371 23456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Form Side */}
          <div className="flex-1 bg-brand-cream-dark/5 backdrop-blur-md p-12 md:p-16 lg:p-24 border-l border-white/5">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" placeholder="FULL NAME" className="bg-transparent border-b border-white/20 w-full py-4 text-white text-xs font-black tracking-widest focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/20" />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="CONTACT NUMBER" className="bg-transparent border-b border-white/20 w-full py-4 text-white text-xs font-black tracking-widest focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="relative flex items-center gap-3 border-b border-white/20 pb-4">
                  <Users size={16} className="text-brand-gold" />
                  <select className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none cursor-pointer">
                    <option className="bg-brand-brown">1 GUEST</option>
                    <option className="bg-brand-brown" selected>2 GUESTS</option>
                    <option className="bg-brand-brown">4 GUESTS</option>
                    <option className="bg-brand-brown">6 GUESTS</option>
                  </select>
                </div>
                <div className="relative flex items-center gap-3 border-b border-white/20 pb-4">
                  <Calendar size={16} className="text-brand-gold" />
                  <input type="date" className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none" />
                </div>
                <div className="relative flex items-center gap-3 border-b border-white/20 pb-4">
                  <Clock size={16} className="text-brand-gold" />
                  <input type="time" defaultValue="19:30" className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none" />
                </div>
              </div>

              <button className="w-full bg-brand-gold text-brand-brown py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4 group">
                Confirm Reservation
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
