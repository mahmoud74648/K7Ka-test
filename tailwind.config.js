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
          purple: '#5A3E9B',      // Main Brand (بنفسجي غامق)
          purpleMedium: '#7B5CCB', // بنفسجي متوسط
          purpleLight: '#B9A7E6',  // بنفسجي فاتح / ليلكي
          blueViolet: '#4A90E2',   // أزرق مائل للبنفسجي
          blueLight: '#7EC8E3',    // أزرق فاتح
          pinkAccent: '#F48FB1',   // وردي ناعم
          pinkSoft: '#FADADD',     // وردي فاتح جدًا
          offwhite: '#F7F7FB',     // أوف وايت
          grayLight: '#E0E0E0',    // رمادي خفيف
          textDark: '#333333',     // نص غامق
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

