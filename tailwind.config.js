/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        'IBM_PLEX': ['IBM Plex Serif', 'serif'],
        'Fira_Sans':['Fira Sans','sans-serif'], // Replace 'YourFontName' with the actual font name
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin')],
}
