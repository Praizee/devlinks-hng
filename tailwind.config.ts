import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      danger: "#FF3939",
      primary: {
        DEFAULT: "#633CFF",
        100: "#BEADFF",
        200: "#EFEBFF",
      },
      gray: {
        DEFAULT: "#333333",
        100: "#737373",
        200: "#D9D9D9",
        300: "#FAFAFA",
      },
      "button-primary": {
        DEFAULT: "#633CFF",
        active: "#BEADFF",
        disabled: "#633CFF",
        300: "#FAFAFA",
      },
    },

    borderRadius: {
      DEFAULT: "8px",
      none: "0",
      // sm: "0.125rem",
      // md: "0.375rem",
      // lg: "0.5rem",
      // full: "9999px",
      // large: "12px",
    },
  },
  plugins: [],
};
export default config;
