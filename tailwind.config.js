/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1D1F2A',
        lightBg: '#272C3A',
        xLightBg: '#323B4E',
        text: '#ECF0EF',
        gray: '#82899B',
        primary: '#7369EA',
      }
    },
  },
  plugins: [],
}
