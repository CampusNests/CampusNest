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
          50:  '#EDF7F7',
          100: '#D2EAEA',
          500: '#1C8C8C',
          600: '#136E6E',
          700: '#0C5252',
        },
        slate: {
          50:  '#F6F7F9',
          100: '#EDEFF2',
          200: '#DFE3E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}