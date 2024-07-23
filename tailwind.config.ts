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

    scale: {
      "90": "0.990",
      "95": "0.95",
    },

    borderRadius: {
      DEFAULT: "8px",
      none: "0",
      md: "12px",
    },
  },
  plugins: [],
};
export default config;
