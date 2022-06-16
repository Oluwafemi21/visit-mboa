/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        green: '#35C801'
      },
      backgroundImage: {
        'header': "url('/images/background-image.png')",
      },
      fontFamily: {
        sans: ["Poppins"],
        text: ["Open Sans"],
      },
      boxShadow: {
        '3xl': '0 0 0 10000px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
}
