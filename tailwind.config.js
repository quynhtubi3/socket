/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      slideRIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideROut: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      slideLIn: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideLOut: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      slideRIn: 'slideRIn 1s ease-in-out forwards',
      slideROut: 'slideROut 1s ease-in-out forwards',
      slideLIn: 'slideLIn 1s ease-in-out forwards',
      slideLOut: 'slideLOut 1s ease-in-out forwards',
    },
  },
  plugins: [],
};
