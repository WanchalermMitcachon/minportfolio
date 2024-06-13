/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slightDesaturatedCyan: "#5FB4A2",
        darkBlue: "#203A4C",
        grayisDarkhBlue: "#33323D",
        veryLightGray: "#FAFAFA",
        lightGrey: "#EAEAEB",
        brightRed: "#F43030",
      },
      fontSize: {
        h1: "50px",
        h2: "40px",
        h3: "32px", // 32px
        "body-1": "15px",
        "body-2": "15px",
      },
      lineHeight: {
        h1: "50px", // 50px
        h2: "42px", // 42px
        h3: "36px", // 36px
        "body-1": "30px",
        "body-2": "30px",
      },
      letterSpacing: {
        h1: "-0.45px",
        h2: "-0.36px",
        h3: "-0.29px",
      },
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
      nova: ["Ibarra Real Nova", "serif"],
    },
    maxWidth: {
      container: "1110px",
    },
    screens: {
      md: "768px",
      lg: "1280px",
    },
  },
  plugins: [],
};
