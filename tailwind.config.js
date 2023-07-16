/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backcolor:"var(--backcolor)"
        // bkgrd:"var(--bkg)"
      }
    },
  },
  plugins: [],
}
