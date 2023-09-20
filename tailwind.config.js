/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      bp: "1400px",
      md: "650px",
    },
    fontSize: {
      cash: "18rem",
      scash: "6rem",
      xl: "1rem",
      xxl: "4rem",
    },
    extend: {},
  },
  plugins: [],
};
