/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'stix': ['STIX Two Text', 'serif'],
        'belle': ['Bellefair', 'serif'],
        'rubik': ['Rubik', 'sans-serif'],

       

        
      }
    },
  },
  plugins: [],
}
