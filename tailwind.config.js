/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // "Official blue" palette — clean cool-white page, soft blue-tinted bands,
      // deep navy ink for headings/CTA, with the logo blue (held in `sage`) as
      // the action colour. Token *names* are kept (cream/gold/sand are now cool
      // blues) so the whole site re-skins from these definitions alone.
      colors: {
        cream: {
          DEFAULT: '#eef3f9', // page background — soft cool white
          50: '#ffffff', // raised cards / panels — pure white
          100: '#e3ebf5', // sunken section bands — light blue tint
        },
        paper: '#f4f8fc', // text/icons on dark (ink) surfaces
        line: '#d9e2ef', // hairline borders — cool blue-grey
        ink: {
          DEFAULT: '#15243d', // headings, dark CTA blocks — deep navy
          line: '#34466a', // borders on dark surfaces
          soft: '#aeb9cc', // muted text on dark surfaces
          dim: '#909cb1',
        },
        body: '#3b4557', // default body text — cool slate
        soft: '#5b6678', // secondary text — muted slate
        // Eyebrow/label accent. Token name kept (`gold`, used ~13× site-wide) but
        // now holds the LOGO RED (rgb(230,47,42) deepened a touch for legibility
        // on the cool-white bg) — the secondary brand accent beside `sage` blue.
        gold: '#cc2722', // eyebrow labels / small highlights — logo red
        sand: '#aebfd9', // serif numerals — soft periwinkle-grey
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
