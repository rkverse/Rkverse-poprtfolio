/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0D13',
          900: '#0F131B',
          800: '#131824',
          700: '#1B212F',
          600: '#2A3142',
          500: '#454E63',
          400: '#6B7385',
          300: '#8B93A5',
          200: '#B8BFCC',
          100: '#E4E7EC',
          50: '#F7F8FA',
        },
        paper: {
          DEFAULT: '#F6F5F1',
          card: '#FFFFFF',
        },
        teal: {
          DEFAULT: '#3FD8C2',
          soft: '#A7F3E8',
          deep: '#0E9F8B',
        },
        amber: {
          DEFAULT: '#F5A623',
          soft: '#FCD9A0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(63,216,194,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,216,194,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        marquee: 'marquee 22s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
