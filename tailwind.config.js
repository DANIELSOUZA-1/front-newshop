/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 5'
      }
    }
  },
  plugins: [
  ],
  
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}

