/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 10px 50px 0px rgba(0, 0, 0, 0.07)',
      },
      borderRadius:{
        'custom': '500px 0px 500px 500px;'
      }
    },
  },
  plugins: [],
}

