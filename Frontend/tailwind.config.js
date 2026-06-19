/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EAF1FE',
          100: '#C9DCFC',
          500: '#2451E0',
          600: '#1A3FBA',
          700: '#142F8C',
        },
        emerald: {
          50:  '#E8F8F0',
          100: '#C3EDD7',
          500: '#10A85E',
          600: '#0C8A4B',
          700: '#086938',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}