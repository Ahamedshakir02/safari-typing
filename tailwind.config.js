/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Brand tokens — sampled from the Safari Typing Services logo.
      // THREE brand colours: navy (structure/text), red (CTA/accent),
      // royal blue (secondary accent). Everything else is a neutral.
      colors: {
        navy: {
          DEFAULT: '#16233F', // wordmark / headings / body text / structure
          700: '#24375C',
          800: '#1B2C4D',
          900: '#0E1830',
          50: '#EAEEF5',
        },
        red: {
          DEFAULT: '#E62F2A', // CTA / accent / highlight
          600: '#C8261F',
          50: '#FDECEB',
        },
        blue: {
          DEFAULT: '#1F54A6', // royal blue — secondary accent (from the logo mark)
          600: '#194687',
          50: '#E9F0FA',
        },
        // neutrals (not brand colours)
        offwhite: '#F6F8FB',
        mist: '#EBEFF5',
        ink: '#131A26', // body text (near-black)
        muted: '#5A6677',
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
        card: '0 1px 2px rgba(22,35,63,0.04), 0 8px 24px rgba(22,35,63,0.06)',
        cardHover: '0 2px 4px rgba(22,35,63,0.06), 0 16px 40px rgba(22,35,63,0.10)',
        float: '0 8px 24px rgba(22,35,63,0.18)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        bob: 'bob 1.8s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
