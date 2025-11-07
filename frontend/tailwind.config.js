/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matcha': '#10B981',
        'sky': '#38BDF8',
      },
    },
  },
  plugins: [],
}
