/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,jsx,tsxhtml,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F17140",
        secondary: "#009688",
        success: "#00D341",
        warning: '#FFD801',
        error: "#FF3C00",
      }
    },
  },
  plugins: [],
}