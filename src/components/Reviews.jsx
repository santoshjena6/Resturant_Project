import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'Bhubaneswar',
    avatar: '👨',
    rating: 5,
    date: '2 weeks ago',
    text: 'The Dal Makhani here is absolutely divine! Reminds me of home back in Punjab. The Patiala Lassi is thick, creamy and perfect. Came here for a family dinner and everyone loved it. Will be back soon!',
    dish: 'Dal Makhani + Lassi',
  },
  {
    name: 'Priya Das',
    location: 'Cuttack',
    avatar: '👩',
    rating: 5,
    date: '1 month ago',
    text: 'Best Tandoori Chicken in Bhubaneswar — hands down! The chicken is perfectly charred, juicy inside and the masala is spot on. The ambiance is warm and the staff is very welcoming. Highly recommended!',
    dish: 'Tandoori Chicken',
  },
  {
    name: 'Amit Mohanty',
    location: 'Bhubaneswar',
    avatar: '🧔',
    rating: 5,
    date: '3 weeks ago',
    text: 'Tried the Maharaja Non-Veg Thali and I was blown away. So many dishes in one plate and every single one tasted incredible. Authentic Punjabi flavors in the heart of Bhubaneswar. Pure satisfaction!',
    dish: 'Maharaja Thali',
  },
  {
    name: 'Sunita Pattnaik',
    location: 'Bhubaneswar',
    avatar: '👩‍🦱',
    rating: 5,
    date: '2 months ago',
    text: 'We had our family get-together here and it was a perfect choice. The Butter Chicken is rich and flavorful, and the Garlic Naan is just outstanding. Service was quick and the staff was very courteous.',
    dish: 'Butter Chicken + Naan',
  },
  {
    name: 'Vikram Singh',
    location: 'Rourkela',
    avatar: '👨‍💼',
    rating: 4,
    date: '1 month ago',
    text: 'Visited during a work trip to Bhubaneswar. Heard great things and it did not disappoint! The Chicken Patiala is unique — never had it wrapped in an omelet before. Absolutely delicious combination!',
    dish: 'Chicken Patiala',
  },
  {
    name: 'Meena Agarwal',
    location: 'Bhubaneswar',
    avatar: '👩‍🦳',
    rating: 5,
    date: '3 months ago',
    text: 'Kake Da Minar has become our go-to restaurant for Punjabi food in Bhubaneswar. The Patiala Lassi alone is worth the trip! Desi ghee food tastes so authentic here. Love this place.',
    dish: 'Patiala Lassi',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-base ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
    ))}
  </div>
);

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((current + 1) % reviews.length);

  // Show 3 cards on desktop, 1 on mobile
  const visibleDesktop = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-punjabi-saffron/60"></div>
            <span className="text-punjabi-saffron text-sm font-bold uppercase tracking-widest">Real People. Real Reviews.</span>
            <div className="h-px w-12 bg-punjabi-saffron/60"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main">
            What Our Guests <span className="text-punjabi-saffron">Say</span>
          </h2>

          {/* Google Rating Block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="bg-gray-50 border border-gray-100 backdrop-blur-sm rounded-2xl px-8 py-5 flex items-center gap-5">
              <div className="text-5xl font-black text-text-main">4.5</div>
              <div>
                <Stars count={5} />
                <p className="text-text-main/60 text-sm mt-1 font-medium">Based on 6,600+ Reviews</p>
                <div className="flex items-center gap-2 mt-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                  <span className="text-text-main/50 text-xs">Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards - Desktop shows 3, Mobile shows 1 */}

        {/* Mobile single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-7 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cream-dark rounded-full flex items-center justify-center text-2xl">{reviews[current].avatar}</div>
                  <div>
                    <p className="font-bold text-earthy-brown">{reviews[current].name}</p>
                    <p className="text-text-muted text-xs">📍 {reviews[current].location}</p>
                  </div>
                </div>
                <Stars count={reviews[current].rating} />
              </div>
              <p className="text-text-muted text-sm leading-relaxed italic mb-4">"{reviews[current].text}"</p>
              <div className="flex items-center justify-between">
                <span className="bg-punjabi-saffron/10 text-punjabi-saffron text-xs font-bold px-3 py-1 rounded-full">🍽️ {reviews[current].dish}</span>
                <span className="text-text-muted text-xs">{reviews[current].date}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop 3-card grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleDesktop.map((review, i) => (
            <motion.div
              key={review.name + current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-7 shadow-soft flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cream-dark rounded-full flex items-center justify-center text-2xl flex-shrink-0">{review.avatar}</div>
                  <div>
                    <p className="font-bold text-earthy-brown text-sm">{review.name}</p>
                    <p className="text-text-muted text-xs">📍 {review.location}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>
              <p className="text-text-muted text-sm leading-relaxed italic flex-grow mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-cream-dark pt-4">
                <span className="bg-punjabi-saffron/10 text-punjabi-saffron text-xs font-bold px-3 py-1 rounded-full">🍽️ {review.dish}</span>
                <span className="text-text-muted text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-punjabi-saffron text-text-main hover:text-punjabi-saffron flex items-center justify-center transition-all font-bold text-lg"
          >
            ←
          </button>
          <div className="flex gap-2 items-center">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'bg-punjabi-saffron w-8 h-3' : 'bg-gray-200 w-3 h-3'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-punjabi-saffron hover:bg-gray-100 hover:text-text-main text-text-main flex items-center justify-center transition-all font-bold text-lg"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
