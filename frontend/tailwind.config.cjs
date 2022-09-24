/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5378e0',
          secondary: '#9fe506',
          accent: '#c6e268',
          neutral: '#3A293D',
          'base-100': '#233948',
          info: '#82CBED',
          success: '#44E4B4',
          warning: '#8E690B',
          error: '#E6492D',
        },
      },
    ],
  },

  plugins: [require('autoprefixer'), require('daisyui')],
};
