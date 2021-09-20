const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      teal: colors.teal,
    }
  },
}