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
        link_text:'#8a99af',
        headingSmall:'#455a64',
        tableBorder:'#455a64',
        tokenBorder:'#546e7a',
        mainBg:'#009688',
        sideBarBg:'#1c2434',
      },
      boxShadow:{
        paperShadow:' 0px 3px 8px rgba(0, 0, 0, 0.24)'
      },
      aspectRatio: {
        a4: '297mm / 210mm',
      }
    },
  },
  plugins: [],
})

