/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gurukulam: {
          maroon: '#5A1E0E',
          'maroon-dark': '#3E170B',
          'maroon-light': '#7A3518',
          'maroon-hover': '#4A170A',
          gold: '#C99232',
          'gold-light': '#E8B85C',
          'gold-soft': '#F4D38B',
          cream: '#F8EACD',
          ivory: '#FFF8E8',
          beige: '#EBD7B3',
          'card-bg': '#FFFDF9',
          'text-dark': '#2E120A',
          'text-muted': '#6B4E3D',
          'accent-red': '#D32F2F',
          'live-red': '#E53935',
          border: '#E8D2B4',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        heading: ['Cinzel Decorative', 'Cinzel', 'Playfair Display', 'serif'],
        telugu: ['Noto Sans Telugu', 'Gautami', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(62, 23, 11, 0.08), 0 2px 6px -1px rgba(62, 23, 11, 0.04)',
        'warm-hover': '0 10px 25px -3px rgba(62, 23, 11, 0.15), 0 4px 10px -2px rgba(62, 23, 11, 0.08)',
        'warm-lg': '0 15px 35px -5px rgba(62, 23, 11, 0.18)',
        'gold-glow': '0 0 15px rgba(201, 146, 50, 0.35)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
};
