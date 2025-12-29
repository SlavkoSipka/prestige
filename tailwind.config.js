/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marina: {
          blue: '#1B3964',
          gold: '#C4A962', // Keeping gold for text/accents
          cream: '#F2EFE6', // Warmer, slightly "dirty" off-white color
          light: '#F5F6F8',
          dark: '#0F1E35'
        }
      }
    },
  },
  plugins: [],
};
