/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        soothYellow: "rgb(var(--color-soothYellow))",
      },
      animation: {
        spinout: 'spinout 1s ease-in-out',
      },
      keyframes: {
        spinout: {
        "0%":  {    transform: "rotate(0deg);" },
        "60%": {    transform: "rotate(360deg);" },
        "70%": {    transform: "scale(1.1);" },
        "80%": {    transform: "translate(0.3rem, 0);"},
        "100%":{    transform: "translate(0, 0);" },
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
