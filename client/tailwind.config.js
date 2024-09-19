/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1abaa9',
        background: '#f7f8f9',
        secondary: '#d0d9df',
        tertiary: '#acb9c5',
        dark: '#353244',
        black: '#000000'
      },
    },
  },
  plugins: [],
}
