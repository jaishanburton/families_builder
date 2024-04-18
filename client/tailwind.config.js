module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // Changed 'purge' to 'content'
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: { colors: {
      
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
