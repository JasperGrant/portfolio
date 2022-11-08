/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'plum': '#583759',
      'forrest': '#002E20',
      'neutral': '#27272a',
      'turquoise': '#2dd4bf',
      'white': '#ffffff'
    },
    extend: {
      backgroundImage: {
        'DALCampus' : "url('./img/DALCampus.png')"
      }
    },
  },
  plugins: [],
}
