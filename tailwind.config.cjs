/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.{html,js,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        yellow: {
          550: '#E5C643',
          500: '#E6C744',
          300: '#EBD96B',
          200: '#FBEDA3',

        },
        white: {
          300: '#FEFEFE',
          200: '#F4F6F5',
          100: '#FFFFFF',

        },
        black: {
          900: '#000000',
          850: '#191919',
          800: '#242323',
        },
        gray: {
          600: '#7F7F7F',
          550: '#8E8E8E',
          500: '#C2C8DA',
          400: '#D9D9D9',
        },
      },
    },
    screens: {
      ss: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
};
