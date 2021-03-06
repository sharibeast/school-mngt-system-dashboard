module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolgray: {
          DEFAULT: '#f6f7fb',
        },
        coolbg: {
          DEFAULT: '#EBEBF9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
