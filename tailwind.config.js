/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {
      colors: {
        'silver-100': '#F0F2F5',
        'silver-200': '#D9DBDF',
        'silver-300': '#54656F'
      }
    }
  },
  plugins: []
};