/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#626D7C",
      },
      borderRadius: {
        "corner-03": "8px",
        "corner-04": "12px",
      },
      backgroundColor: {
        primary: "#FFC426",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1312px",
        xl: "1312px",
        "2xl": "1312px",
      },
    },
  },
  plugins: [],
};
