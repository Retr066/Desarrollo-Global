const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      body: ["Nunito", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
    extend: {
      screens: {
        xs: { min: "475px", max: "639px" },
        ...defaultTheme.screens,
      },
      colors: {
        transparent: "transparent",
        primary: {
          light: "#0f59cf",
          DEFAULT: "#004FCC",
        },
        secondary: {
          DEFAULT: "#1C365E",
          dark: "#142a4b",
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
  variants: {
    extend: {
      scrollbar: ["dark"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tw-elements/dist/plugin")],
};
