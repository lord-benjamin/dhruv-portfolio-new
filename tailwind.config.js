/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "coke": "#22092C",
        "dark-red": "#872341",
        "light-red": "#BE3144",
        "orange": "#F05941"
      },
      fontFamily: {
        acme: ["Acme", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      animation: {
        'zoom': 'zoom 0.3s ease-in-out',
        'verticalMarquee': 'verticalMarquee 10s linear infinite',
        'verticalMarquee2': 'verticalMarquee2 10s linear infinite',
        'verticalMarquee3': 'verticalMarquee3 10s linear infinite',
        'verticalMarquee4': 'verticalMarquee4 10s linear infinite',
        'spinning': 'spinning 5s linear infinite',
        'horizontalMarqueeLeft': 'horizontalMarqueeLeft 60s linear infinite',
        'horizontalMarqueeLeft2': 'horizontalMarqueeLeft2 60s linear infinite',
        'horizontalMarqueeLeft3': 'horizontalMarqueeLeft3 60s linear infinite',
        'horizontalMarqueeLeft4': 'horizontalMarqueeLeft4 60s linear infinite',
        'horizontalMarqueeRight': 'horizontalMarqueeRight 60s linear infinite',
        'horizontalMarqueeRight2': 'horizontalMarqueeRight2 60s linear infinite',
        'horizontalMarqueeRight3': 'horizontalMarqueeRight3 60s linear infinite',
        'horizontalMarqueeRight4': 'horizontalMarqueeRight4 60s linear infinite',
      },
      keyframes: {
        zoom: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        },
        verticalMarquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        verticalMarquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        verticalMarquee3: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        verticalMarquee4: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        spinning: {
          '100%': { transform: 'rotate(360deg)' },
        },
        horizontalMarqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        horizontalMarqueeLeft2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        horizontalMarqueeLeft3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        horizontalMarqueeLeft4: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        horizontalMarqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        horizontalMarqueeRight2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        horizontalMarqueeRight3: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        horizontalMarqueeRight4: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
}
