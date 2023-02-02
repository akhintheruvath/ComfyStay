/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '0',
        md:'1px',
        lg: '0',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      screens: {
        'mmd': {'max': '999px'},
        'ssm': {'max': '512px'}
      }
    },
  },
  plugins: [],
}