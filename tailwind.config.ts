import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFCC4E",
        "yellow-light": "#FDD985",
        "brown-light": "#9D2B3A",
        "brown-dark": "#350C18",
        white: "#FFFFFF",
        "yellow-opacity": "rgba(255, 204, 78, 0.4)",
        "gray-opacity": "rgba(243, 243, 243, 0.7)",
      },
      fontFamily: {
        sans: ["SBAggroB"],
      },
      fontWeight: {
        light: "300",
        medium: "500",
        bold: "700",
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-out": "fade-out 1s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
