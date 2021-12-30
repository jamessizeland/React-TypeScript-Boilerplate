const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        blue: colors.sky,
        primary: '#9b59b6',
        secondary: '#1abc9c',
      },
      animation: {
        modal: 'modal 0.5s',
        'drawer-right': 'drawer-right 0.3s',
        'drawer-left': 'drawer-left 0.3s',
        'drawer-top': 'drawer-top 0.3s',
        'drawer-bottom': 'drawer-bottom 0.3s',
      },
      keyframes: {
        modal: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'drawer-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },
        'drawer-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },
        'drawer-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        'drawer-bottom': {
          '0%, 100%': { bottom: '-500px' },
          '100%': { bottom: '0' },
        },
      },
      fontFamily: {
        inter: ['Inter'],
        body: ['Open Sans'],
      },
    },
  },
  variants: {},
  plugins: [],
};
