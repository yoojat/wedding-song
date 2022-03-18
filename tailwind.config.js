module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    transitionTimingFunction: {
      'menu-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    extend: {
      colors: {
        mainColor: '#E9E4E0',
        secondColor: '#39332E',
        thirdColor: '#B59B83',
        fourthColor: '#D2C7BC',
        fifthColor: '#C0B1A0',
      },
      backgroundImage: {
        mainPage: "url('/5.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
