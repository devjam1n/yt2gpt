/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      P2P: ["'Press Start 2P', cursive", "ui-sans-serif", "system-ui"],
      roboto: ["Roboto", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        bg: "#1D1F2A",
        lightBg: "#272C3A",
        xLightBg: "#323B4E",
        text: "#ECF0EF",
        gray: "#82899B",
        primary: "#7369EA",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
