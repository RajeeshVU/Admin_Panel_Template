import { keyframes } from '@emotion/react';

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
      keyframes:{
        arrowRotation: {
        
          '100%': { transform: 'rotate(180deg)' },
        },
        alertAnimation: {
          '0%': { transform: 'scale(0)' },
          
          '100%': { transform: 'scale(1)' },
        }
      },
      animation:{
        arrowRotation: 'arrowRotation .5s ease infinite',
        alertAnimation: 'alertAnimation .5s ease '
      },
      colors:{
        link_text:'#8a99af',
        headingSmall:'#455a64',
        tableBorder:'#455a64',
        tokenBorder:'#546e7a',
        mainBg:'#009688',
        sideBarBg:'#1c2434',
        alertBg:'#f9fbfe',
        sideBar:'#1c2434',
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

