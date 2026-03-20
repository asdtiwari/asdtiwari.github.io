/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js" // Scans your JavaScript file for Tailwind classes!
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          dark: '#0284c7',
        },
        ide: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d'
        }
      },
      fontFamily: {
        corporate: ['Inter', 'sans-serif'],
        terminal: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}