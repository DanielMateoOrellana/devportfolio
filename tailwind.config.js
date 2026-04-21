/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne Variable"', 'Syne', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        bg: '#09090E',
        card: '#111118',
        elevated: '#16161E',
        wire: '#1E1E28',
        body: '#EDEDE5',
        mid: '#B8B8C4',
        ghost: '#3A3A48',
        amber: {
          DEFAULT: '#E8641A',
          hot: '#FF7B2F',
          dim: 'rgba(232, 100, 26, 0.15)',
        },
        teal: {
          DEFAULT: '#00C9A7',
          dim: '#00856F',
        },
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
