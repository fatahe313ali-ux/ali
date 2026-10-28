/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F8F5F0',
          200: '#F1EBE0',
          300: '#E8DFCF',
          400: '#DDD2BF',
        },
        charcoal: {
          600: '#3D3835',
          700: '#2A2724',
          800: '#1F1D1B',
          900: '#17150F',
        },
        gold: {
          200: '#EBDDBD',
          300: '#DCC79A',
          400: '#D4B57A',
          500: '#C9A86A',
          600: '#B8964F',
          700: '#9C7E3C',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'persian-wider': '0.02em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.9s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
