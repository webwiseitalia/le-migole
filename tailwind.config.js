/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        cream: '#FAF7F2',
        warm: '#F5F0E8',
        wood: '#8B6914',
        'wood-light': '#C4A265',
        'wood-dark': '#5C4A1E',
        gold: '#C4A265',
        'gold-light': '#D4B87A',
        stone: '#6B7B6E',
        'stone-light': '#9BA89E',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
