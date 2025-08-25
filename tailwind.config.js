/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#0e7eac',
          'secondary': '#2595c3', 
          'light': '#55c4e2',
          'accent': '#4d5198'
        }
      }
    },
  },
  plugins: [],
};
