/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#F0F4F3',
        'secondary-color': '#009306',
      },
      container : {
        center: true,
      }
    },
  },
  plugins: [],
}