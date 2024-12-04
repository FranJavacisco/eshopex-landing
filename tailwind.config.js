/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bfb800',
        secondary: '#dad100',
        accent: '#f6ea00',
        highlight: '#fbf451',
        light: '#ffff7d',
      },
    },
  },
  plugins: [],
}
