/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#262734',
          200: '#1C1D28',
          300: '#14151C',
          400: '#111119'
        },
        light: {
          100: '#F4F5FA',
          200: '#DCDFF8',
          300: '#C8CCEC',
        },
        secondary: '#263660',
        primary: '#EE4A4A',
        lightBlue: '#00B2FF',
        lightRed: '#EE4A4A',
        error: '#f01b1b',
        success: '#23e510'
      }
    },
    fontFamily: {
      title: ['Inter']
    }
  },
  plugins: [],
}