/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  './public/index.html',],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors:{
        primary:'#664343',
        secondary:'#9A7E6F',
        third:'#B7B7B7',
        table:'#DCDCDF',
        fourth:'#F5F5F7',
        fifth:'#EDDFE0'
      },
      fontFamily:{
        body:["Special Elite"]
      } 
    },
  },
  plugins: [],
}

