/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'DALCampus' : "url('./img/DALCampus.png')"
      },
      screens: {
        'xxl': '2500px',
        'abxl': '1400px',
        'hxl': '1900px'
      },
      colors: {
        'plum': '#583759',
        'neutral': '#27272a',
        'turquoise': '#2dd4bf',
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}
