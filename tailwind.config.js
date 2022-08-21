/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans'],
      },
      colors: {
        'primary-white': '#F8FAFC',
      },
    },
  },
  plugins: [],
};
