/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-background": "#151515",
        "blue-cyan": "#AFD3E2",
        white: "#F6F1F1",
      },
      screens: {
        wide: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        home: "url('/assets/background-home.jpg')"
      }
    },
  },
  plugins: [],
};
