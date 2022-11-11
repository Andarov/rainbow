/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          'black': '#252525',
          'pink': '#f78da7',
        }
      }
    },
  },
  plugins: [],
}
