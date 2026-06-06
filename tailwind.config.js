/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-bg': '#FDFBF7',
        'cream-dark': '#F4EFE6',
        'punjabi-saffron': '#F47920',
        'punjabi-red': '#C8102E',
        'earthy-brown': '#5C3A21',
        'text-main': '#2D231E',
        'text-muted': '#6B5A4E',
        'mustard': '#E5A91A',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(92, 58, 33, 0.10)',
        'card': '0 4px 20px rgba(92, 58, 33, 0.07)',
      },
    },
  },
  plugins: [],
}
