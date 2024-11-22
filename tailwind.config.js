/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#68D14F',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(218deg, rgba(40,232,134,1) 4%, rgba(38,172,129,1) 37%, rgba(0,232,41,1) 90%)',
      },
    },
  },
  plugins: [],
};