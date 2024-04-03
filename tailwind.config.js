/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Raleway': ['"Raleway"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

