/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        link_text:'#8a99af'
      },
      boxShadow:{
        paperShadow:' 0px 3px 8px rgba(0, 0, 0, 0.24)'
      }
    },
  },
  plugins: [],
})

