/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#626D7C',
      },
      borderRadius: {
        'corner-03': '8px',
      },
      backgroundColor: {
        primary: '#FFC426'
      }
    },
  },
  plugins: [],
};