/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffbe33',
        secondary: '#222831',
        accent: '#ff6b35',
        text: '#1f1f1f',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
