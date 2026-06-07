/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-maroon': '#5D0E11',
        'brand-gold': '#C5A059',
        'brand-saffron': '#E67E22',
        'brand-cream': '#FAF7F2', 
        'brand-cream-dark': '#F0E6D2',
        'brand-brown': '#2D1E17',
        'text-muted': '#7A6B63',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cormorant"', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(0,0,0,0.08)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'royal-gradient': "linear-gradient(to right, #420B0B, #5D0E11)",
      }
    },
  },
  plugins: [],
}
