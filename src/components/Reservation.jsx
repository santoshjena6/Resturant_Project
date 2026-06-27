import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';

const Reservation = () => (
  <section id="reservation" className="py-16 bg-white relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="bg-brand-brown rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">

        {/* Info side */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-3">Concierge</p>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-5 leading-tight">
              SECURE YOUR <br />
              <span className="text-brand-gold italic">ROYAL SEAT</span>
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Join us for an evening of luxury, where every table is treated with the dignity of an imperial court.
            </p>

            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-0.5">Instant Booking</h4>
                <p className="text-brand-gold font-serif text-xl font-bold">+91 94371 23456</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="flex-1 bg-brand-cream-dark/5 backdrop-blur-md p-8 md:p-12 lg:p-16 border-l border-white/5">
          <form className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <input
                type="text"
                placeholder="FULL NAME"
                className="bg-transparent border-b border-white/20 w-full py-3 text-white text-xs font-black tracking-widest focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/20"
              />
              <input
                type="tel"
                placeholder="CONTACT NUMBER"
                className="bg-transparent border-b border-white/20 w-full py-3 text-white text-xs font-black tracking-widest focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                <Users size={14} className="text-brand-gold shrink-0" />
                <select className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-brand-brown">1 GUEST</option>
                  <option className="bg-brand-brown" defaultValue>2 GUESTS</option>
                  <option className="bg-brand-brown">4 GUESTS</option>
                  <option className="bg-brand-brown">6 GUESTS</option>
                </select>
              </div>
              <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                <Calendar size={14} className="text-brand-gold shrink-0" />
                <input type="date" className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none" />
              </div>
              <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                <Clock size={14} className="text-brand-gold shrink-0" />
                <input type="time" defaultValue="19:30" className="bg-transparent w-full text-white text-xs font-black tracking-widest focus:outline-none appearance-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-brown py-4 rounded-full font-black text-xs uppercase
                         tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3 group"
            >
              Confirm Reservation
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default Reservation;
