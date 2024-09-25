/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    boxShadow: {
      '3xl': '0px 0px 20px rgba(100, 100, 100, .5)',
    },
    dropShadow:{
      'centered':'0px 0px 10px #c5c5c5e6',
      'face':['0px 0px 15px hsla(216, 100%, 75%, 1)','0px 0px 15px hsla(216, 100%, 75%, 0.671)'],
      'inst':['0px 0px 15px #ff8e62c7','0px 0px 15px #fa8e63cc'],
      'tel':['0px 0px 15px hsla(216, 100%, 67%, 0.801)','0px 0px 15px hsla(216, 100%, 67%, 0.842)'],
      'twit':['0px 0px 10px #35c6ffc7','0px 0px 10px #65d3ffce'],
    },
    backgroundImage:{
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }

  },
    screens: {
      'xs': '440px',
      // => @media (min-width: 440px) { ... }
  
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '868px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }
  
      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }

      '5xl': '2200px',
      // => @media (min-width: 2200px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
