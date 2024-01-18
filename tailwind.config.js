/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        layoutBg:"rgb(0,0,0)",
        navbarBg:"#121212",
        logoBg: "rgb(245, 197, 24)",
  
      },
    },
  },
  plugins: [],
}