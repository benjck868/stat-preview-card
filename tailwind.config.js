/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "SPC-very-dark-blue": "hsl(233, 47%, 7%)",
        "SPC-dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "SPC-soft-violet": "hsl(277, 64%, 61%)",
      },
      fontFamily: {
        "SPC-inter": ["Barlow Semi Condensed", "sans-serif"],
        "SPC-lexend-deca": ["Lexend Deca", "sans-serif"],
      }
    },
  },
  plugins: [],
}

