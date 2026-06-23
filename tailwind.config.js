/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Brand tokens — TWO brand colours only (navy + red). Everything else
      // is a neutral. Change these to reskin the whole site.
      colors: {
        navy: {
          DEFAULT: '#0B1F3A', // anchor / structure / trust
          700: '#143257',
          800: '#0E2747',
          900: '#061230',
          50: '#EAF0F8',
        },
        red: {
          DEFAULT: '#D7261E', // CTA / accent / highlight
          600: '#C01F18',
          50: '#FCEAE9',
        },
        // neutrals (not brand colours)
        offwhite: '#F6F7F9',
        mist: '#ECEFF4',
        ink: '#0E141B', // body text (near-black)
        muted: '#5A6473',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,31,58,0.04), 0 8px 24px rgba(11,31,58,0.06)',
        cardHover: '0 2px 4px rgba(11,31,58,0.06), 0 16px 40px rgba(11,31,58,0.10)',
        float: '0 8px 24px rgba(11,31,58,0.18)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        bob: 'bob 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
