export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#16211D',
          soft: '#3F4E48',
          muted: '#6C7B74',
        },
        jungle: {
          50: '#EEF5F2',
          100: '#D6E7E0',
          200: '#A9CCC0',
          400: '#3C8C77',
          600: '#1C6A58',
          700: '#155245',
          800: '#0F3D33',
          900: '#0A2A23',
        },
        sand: {
          50: '#FDFBF7',
          100: '#F7F1E7',
          200: '#EDE3D3',
          300: '#DCCDB4',
          400: '#C4B292',
        },
        clay: {
          100: '#F8E5DA',
          300: '#E0A98B',
          500: '#C4623A',
          600: '#A54D2B',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22, 33, 29, 0.04), 0 8px 24px -12px rgba(22, 33, 29, 0.16)',
        lift: '0 2px 4px rgba(22, 33, 29, 0.06), 0 16px 40px -16px rgba(22, 33, 29, 0.22)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
