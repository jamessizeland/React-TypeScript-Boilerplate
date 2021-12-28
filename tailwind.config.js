const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
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
  plugins: [],
};
