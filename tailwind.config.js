module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      nanito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          light: "#0f59cf",
          DEFAULT: "#004FCC",
        },
        secondary: {
          DEFAULT: "#1C365E",
        },
        white: {
          DEFAULT: "#FFFFFA",
        },
        danger: {
          DEFAULT: "#CE2D4F",
        },
        dark: {
          DEFAULT: "#0F1020",
        },
      },
    },
  },
  plugins: [],
};
