/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // "Quiet editorial" palette — sampled from the approved designs.
      // Warm sand page, sage-green action colour, deep ink for headings/CTA.
      colors: {
        cream: {
          DEFAULT: '#f1eadd', // page background
          50: '#faf6ee', // raised cards / panels
          100: '#ece3d3', // sunken section bands
        },
        paper: '#f6f3ea', // text/icons on dark (ink) surfaces
        line: '#e2d9c8', // hairline borders
        ink: {
          DEFAULT: '#1d2839', // headings, dark CTA blocks
          line: '#41506a', // borders on dark surfaces
          soft: '#b9c0cc', // muted text on dark surfaces
          dim: '#9aa3b2',
        },
        body: '#4a463c', // default body text
        soft: '#6a6354', // secondary text
        gold: '#86715a', // eyebrow labels / muted brown
        sand: '#b6a888', // serif numerals
        sage: {
          DEFAULT: '#5e7257', // primary action
          dark: '#4d6047', // hover on light
          light: '#6f8568', // hover on dark
        },
        tag: {
          bg: '#e6ecdd',
          ink: '#4a5c44',
          line: '#d3ddc4',
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        body: ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      borderRadius: {
        arch: '280px 280px 28px 28px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(29,40,57,0.04), 0 12px 32px rgba(29,40,57,0.06)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        bar: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(360%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(.16,.84,.44,1) both',
        bar: 'bar 1.2s ease-in-out infinite',
        float: 'float 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
