/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: "0.75rem",
        reg: "1rem",
        "small-serif": "1rem",
        "reg-serif": "1.3rem",
        small: "1.25rem",
        medium: "2rem",
        lg: "4.5rem",
        huge: "7.5rem",
      },
      fontFamily: {
        sans: ["Satoshi"],
        serif: ["EB Garamond12"],
      },
      colors: {
        white: "#fff",
        black: "#1d1d1d",
        darkGray: "#565656",
        mediumGray: "#919191",
        lightGray: "#F5F5F5",
        lightPink: "#FCEDEA",
        darkPink: "#E41B4A",
        lightBlue: "#EDFFFF",
        darkBlue: "#0B24F5",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "5rem",
        xxl: "7.5rem",
      },
      gridTemplateColumns: {
        "project-list": "repeat(auto-fill, minmax(320px, 1fr))",
        "project-list-mobile": "1fr 1fr",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1281px",
      xxl: "1600px",
      "2xl": { min: "1920px" },
    },
  },
  plugins: [],
};
