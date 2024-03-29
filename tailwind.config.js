/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050038",
        secondary: "#4262FF",

      },
      maxWidth: {
        container: "1140px",
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
        'inter': "'Inter', sans-serif",
        'helt': 'Helvetica, Arial, sans-serif',
      },
    },
    screens: {
      'xs': '350px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}