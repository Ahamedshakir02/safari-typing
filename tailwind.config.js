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
        body: '#46423a', // default body text (slightly deepened for contrast)
        soft: '#645d4e', // secondary text (deepened for readability on cream)
        gold: '#7c6749', // eyebrow labels / muted brown (deepened for contrast)
        sand: '#b6a888', // serif numerals
        // NOTE: the `sage` token name is kept (used ~100× site-wide) but now holds
        // the brand BLUE sampled from the logo mark (rgb(31,84,166)), so the whole
        // site flips from green to the logo's blue from this one definition.
        sage: {
          DEFAULT: '#1f54a6', // brand blue (logo) — primary action
          dark: '#18437f', // hover on light
          light: '#3a6cbf', // hover on dark
        },
        tag: {
          bg: '#e3eaf6', // blue-tinted chip background
          ink: '#2c4a7a', // text/icon on tag bg
          line: '#cfdcef',
        },
        // UAE national accents — woven in sparingly (flag, dividers, select
        // highlights). Sage stays the primary action colour; red is used mainly
        // for the flag and tiny details so the calm, premium feel holds.
        uae: {
          green: '#007a3d',
          red: '#ce1126',
          white: '#ffffff',
          black: '#1a1a1a',
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
        lift: '0 2px 6px rgba(29,40,57,0.08), 0 16px 40px rgba(29,40,57,0.14)',
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
