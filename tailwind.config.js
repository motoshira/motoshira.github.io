/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#8bc34a',
        secondary: '#ff9800',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
