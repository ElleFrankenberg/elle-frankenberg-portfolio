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
        reg: "16px",
        "reg-serif": "1.3rem",
        small: "1.25rem",
        medium: "2rem",
        lg: "5rem",
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
        lightPink: "#FCEDEA",
        darkPink: "#EB5577",
        lightBlue: "#EDFFFF",
        darkBlue: "#0B24F5",
        lightGray: "#F5F5F5",
        green: "#6DB486",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1281px",
    },
  },
  plugins: [],
};
