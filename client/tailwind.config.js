/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        'theme-black':'#18122B',
        'theme-second':'#443C68'
      },
    },
  },
  plugins: [],
}

