/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          'black': '#252525',
          'pink': '#eed9e5',
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'Arial', 'sans-serif'],
        'rufina': ['Rufina','serif'],
      },
    },
  },
  plugins: [],
}
