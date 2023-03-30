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
        'first-grid-card':
          '0px -9px 20px -10px rgba(0, 0, 0, 0.12), 0px -37px 37px -10px rgba(0, 0, 0, 0.1), 0px -83px 50px -10px rgba(0, 0, 0, 0.06), 0px -147px 59px -10px rgba(0, 0, 0, 0.02)',
        'first-grid-card-img':
          '0px 0px 0px 0px rgba(0, 0, 0, 0.18), -7.506031036376953px 17.82682228088379px 43.1596794128418px 0px rgba(0, 0, 0, 0.17), -29.08586883544922px 73.18379974365234px 78.81332397460938px 0px rgba(0, 0, 0, 0.15), -65.67777252197266px 163.25616455078125px 106.0226821899414px 0px rgba(0, 0, 0, 0.09), -117.28173828125px 290.8586730957031px 125.72601318359375px 0px rgba(0, 0, 0, 0.03), -182.9595184326172px 455.0531311035156px 136.9850616455078px 0px rgba(0, 0, 0, 0)',
        'second-grid-card-img':
          '0px 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 12.033082962036133px 25.78517723083496px 0px rgba(0, 0, 0, 0.1), 0px 46.4133186340332px 46.4133186340332px 0px rgba(0, 0, 0, 0.09), 0px 104.85972595214844px 62.743934631347656px 0px rgba(0, 0, 0, 0.05), 0px 185.6532745361328px 74.77701568603516px 0px rgba(0, 0, 0, 0.01), 0px 290.51300048828125px 81.65306091308594px 0px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
};
