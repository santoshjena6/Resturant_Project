/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-bg': '#FFFFFF',
        'cream-dark': '#F9FAFB',
        'punjabi-saffron': '#1F2937',
        'punjabi-red': '#E5E7EB',
        'earthy-brown': '#111827',
        'text-main': '#374151',
        'text-muted': '#6B7280',
        'mustard': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
