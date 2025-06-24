/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
  
}
