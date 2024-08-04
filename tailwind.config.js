/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        blue: {
          soft: '#8BACD9',
          'very-dark-main': '#0D192C',
          'very-dark-card': '#15263F',
          'very-dark-line': '#2E405A',
        },
        cyan: '#00FFF8'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        eye: 'url("./src/assets/icon-view.svg")',
      }
    },
  },
  plugins: [],
}