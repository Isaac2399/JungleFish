/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2A4D38', // Lighter jungle green
          darkgreen: '#0E1F14',
          accent: '#FF8C00', // Mango Orange
          dark: '#1A2F23', // Deep jungle green background
          light: '#FFFFFF', // Clean white
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
