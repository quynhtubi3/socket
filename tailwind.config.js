/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideROut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideLIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideRIn: "slideRIn 1s ease-in-out forwards",
        slideROut: "slideROut 1s ease-in-out forwards",
        slideLIn: "slideLIn 1s ease-in-out forwards",
        slideLOut: "slideLOut 1s ease-in-out forwards",
      },
      colors: {
        theme: {
          100: "#03045e",
          200: "#023e8a",
          300: "#0077b6",
          400: "#0096c7",
          500: "#00b4d8",
          600: "#48cae4",
          700: "#90e0ef",
          800: "#ade8f4",
          900: "#caf0f8",
        },
      },
    },
  },
  plugins: [],
};
