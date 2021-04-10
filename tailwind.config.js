module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      white: '#ffffff',
      gray: 'rgba(156,163,175,1)',
      danger: '#e3342f',
      intro: '#444f45',
      black: '#222',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
