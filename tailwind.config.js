/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        toxigenesis: ["Toxigenesis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
