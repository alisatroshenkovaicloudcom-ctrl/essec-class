/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette taken from the original glacé design
        frost: '#F2F8FD',   // frosted white
        mist: '#EAF3FA',
        powder: '#DDEBF7',  // light powder blue
        ice: '#CFE2F3',     // ice blue
        glacier: '#A9CBE8', // glacier blue
        sky: '#6F97C4',
        slate: '#4F6B8F',
        steel: '#3E5F8C',
        deep: '#253F66',    // deep blue typography
        silver: '#C9D3DE',  // soft silver
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        sans: ['"Barlow Semi Condensed"', '"Arial Narrow"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { label: '0.32em' },
    },
  },
  plugins: [],
}
