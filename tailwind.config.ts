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
        primary: "#FFCC4E",
        light: "#FDD985",
        mainText: "#5B1924",
        subText: "#9D2B3A",
        white: "#FFFFFF",
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
