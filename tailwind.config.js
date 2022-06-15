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
      }
    },
  },
  plugins: [],
}
