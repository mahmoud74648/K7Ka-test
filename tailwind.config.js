/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#5A3825',
          orange: '#C96A3D',
          orangeHover: '#A5552F',
          gold: '#E0A96D',
          blue: '#2E4A62',
          offwhite: '#F7F3EF',
          beige: '#EFE6DD',
          textPrimary: '#3B2A1E',
          textSecondary: '#7A6A5C',
          textLight: '#A89B8F',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(59, 42, 30, 0.12)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 500px at 10% -10%, rgba(224, 169, 109, 0.35), transparent 60%), radial-gradient(1000px 500px at 100% 0%, rgba(46, 74, 98, 0.24), transparent 58%)',
      },
    },
  },
  plugins: [],
}

