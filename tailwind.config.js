module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        dark: '0 12px 20px -12px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [],
}
