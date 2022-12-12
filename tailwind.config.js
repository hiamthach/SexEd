/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-primary': '#ff3d79',
        'black-primary': '#333333',
        'bg-light': '#fffefa',
        'text-primary': '#8a8a8a',
        'white': '#fffefa',
      },
      backgroundColor: {
        light: '#fffefa',
      },
      fontFamily: {
        primary: ['Bebas Neue', 'cursive'],
        secondary: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
