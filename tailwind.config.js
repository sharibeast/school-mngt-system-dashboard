module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      coolgray: {
        DEFAULT: '#f6f7fb',
      },
      coolbg: {
        DEFAULT: '#EBEBF9',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
