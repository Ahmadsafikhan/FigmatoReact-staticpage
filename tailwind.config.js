/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 10px 50px 0px rgba(0, 0, 0, 0.07)",
      },
      borderRadius: {
        custom: "500px 0px 500px 500px;",
      },
      gridTemplateColumns: {
        custom: "repeat(7, 36px)",
      },
      gridTemplateRows: {
        custom: "repeat(8, 36px)",
      },
      
      
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     '.custom-hover': {
    //       '@apply': 'hover:scale-110 transition-all duration-300 hover:shadow-lg',
    //     },
    //   });
    // },
  ],
};
