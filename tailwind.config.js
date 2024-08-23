/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {  
        'md': '880px',
        'lg' :'1025px'
      },
    },
    backgroundImage: {
      'custom-bg': "url('https://static-artifacts-assets.skillovilla.com/assets/backgrounds/circular-bg.png')",
    },
    backgroundPosition: {
      'custom-position': '-300px 250px',
    },
    backgroundSize: {
      'custom-size': '600px',
    },
    padding: {
      'custom-padding': '66px',
    },
    boxShadow: {
      'custom': '0 0 50px 0 rgba(25, 24, 29, 0.08)',
    },
  },
  variants: {},
  plugins: [
  ],
}