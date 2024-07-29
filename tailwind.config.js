/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        custom:{
          heading:'#2c363f',
          theme:'#e04475',
        }
      }
    },
  },
  plugins: [],
}