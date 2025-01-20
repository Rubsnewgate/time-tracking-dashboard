/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        'screen-540': {'min': '540px', 'max': '540px'},
        'tablet': {'min': '768px', 'max': '1024px'},
        'desktop': {'min': '1025px'}
      },
      gridTemplateColumns: {
        'dashboard': '0.3fr 1fr',
      },
      colors: {
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'dark-blue-hover': 'hsl(235, 46%, 30%)',
        'desaturate-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
        'violet': 'hsl(264, 64%, 52%)',
        'blue': 'hsl(246, 80%, 60%)',
        'soft-blue': 'hsl(195, 74%, 62%)',
        'study-light-red': 'hsl(348, 100%, 68%)',
        'work-light-red': 'hsl(15, 100%, 70%)',
        'soft-orange': 'hsl(43, 84%, 65%)',
        'lime-green': 'hsl(145, 58%, 55%)'
      },
      fontFamily: {
        ruby: ['Rubik', 'serif']
      }
    },
  },
  plugins: [],
}

