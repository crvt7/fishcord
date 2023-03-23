/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "0px",
      lg: "900px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
