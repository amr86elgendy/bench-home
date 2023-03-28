/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['inter', 'sans-serif'],
      },
      boxShadow: {
        'plus-btn': '0 8px 20px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
