/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1280px",
      },
      fontFamily: {
        Poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
