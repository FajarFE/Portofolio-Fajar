/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = { 
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extends: {
      colors: {
        'navy-blue': '#1B2430',
      },
      fontFamily: { 'poppins': ['Poppins', 'sans-serif'], 
    }
    }, 

  }, 
  variants: {

  }, 
  plugins: [
     require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), 
    ],
}