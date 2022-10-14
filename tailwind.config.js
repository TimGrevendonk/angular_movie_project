/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        popout: 'popout 0.3s ease-in-out 100ms forwards'
      },
      keyframes: {
        popout: {
        "0%" : { transform: "translate(0px, 0px)" },
        '100%': { transform: "translate(0px, -0.3rem)"},
        }
      }
    },
  },
  plugins: [],
};
