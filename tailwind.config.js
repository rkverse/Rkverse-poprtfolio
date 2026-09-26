/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ink scale — dark surfaces to light text
        // Source: #000000 (40%) + #830000 (25%)
        ink: {
          950: 'rgb(var(--c-ink-950) / <alpha-value>)',  /* #000000 */
          900: 'rgb(var(--c-ink-900) / <alpha-value>)',  /* #0A0000 */
          800: 'rgb(var(--c-ink-800) / <alpha-value>)',  /* #140000 */
          700: 'rgb(var(--c-ink-700) / <alpha-value>)',  /* #200000 */
          600: 'rgb(var(--c-ink-600) / <alpha-value>)',  /* #380000 */
          500: 'rgb(var(--c-ink-500) / <alpha-value>)',  /* #600000 */
          400: 'rgb(var(--c-ink-400) / <alpha-value>)',  /* #830000 */
          300: 'rgb(var(--c-ink-300) / <alpha-value>)',  /* #A83535 */
          200: 'rgb(var(--c-ink-200) / <alpha-value>)',  /* #CC8080 */
          100: 'rgb(var(--c-ink-100) / <alpha-value>)',  /* #EDD4D4 */
          50:  'rgb(var(--c-ink-50)  / <alpha-value>)',  /* #FBF0F0 */
        },
        // Paper — light-mode backgrounds
        paper: {
          DEFAULT: 'rgb(var(--c-paper)      / <alpha-value>)', /* #FFF6F6 */
          card:    'rgb(var(--c-paper-card) / <alpha-value>)', /* #FFFFFF */
        },
        // Accent — #BC0202 (20%) + #FF0000 (15%)
        // Kept as "teal" so no component class names need to change
        teal: {
          DEFAULT: 'rgb(var(--c-accent)      / <alpha-value>)', /* #FF0000 */
          soft:    'rgb(var(--c-accent-soft) / <alpha-value>)', /* #FF9999 */
          deep:    'rgb(var(--c-accent-deep) / <alpha-value>)', /* #BC0202 */
        },
        // Amber — warm complement for tags/badges
        amber: {
          DEFAULT: 'rgb(var(--c-amber)      / <alpha-value>)', /* #CC3400 */
          soft:    'rgb(var(--c-amber-soft) / <alpha-value>)', /* #FFA778 */
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"',         'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgb(var(--c-accent) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-accent) / 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      animation: {
        blink:     'blink 1.1s steps(1) infinite',
        marquee:   'marquee 22s linear infinite',
        float:     'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
