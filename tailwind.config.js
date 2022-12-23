/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'palette-1': '#e0bbe4',
        'palette-2': '#957dad',
        'palette-3': '#d291bc',
        'palette-4': '#fec8d8',
        'palette-5': '#ffdfd3',
      },
      backgroundColor: {
        light: '#ffdfd3',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
