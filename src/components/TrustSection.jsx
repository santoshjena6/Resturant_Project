import React from 'react';

const TrustSection = () => {
  const stats = [
    { num: '15+', label: 'Years of Legacy' },
    { num: '6K+', label: 'Happy Guests' },
    { num: '100%', label: 'Pure Desi Ghee' },
    { num: '4.8', label: 'Google Rating' }
  ];

  return (
    <div className="bg-brand-brown py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-brand-gold text-3xl font-serif font-black mb-1">{stat.num}</p>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
