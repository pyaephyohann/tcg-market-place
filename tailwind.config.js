/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDCE29",
        secondary: "#298BFD",
        tartiary: "#FD2929",
        background: "#FFFFFF",
        quaternary: "#1D1C1C",
        success: "#5DDD48",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
