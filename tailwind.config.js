/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#1d267d',
        secondary: '#3f49a6',
        tertiary: '#0c134f',
        accent: '#fffd54',
        button: '#5c469c',
        white: '#f1f6f9'
      },
      boxShadow: {
        softui: '-3px -3px 2px rgba(255, 255, 255, 0.35), 2px 2px 5px rgba(12, 12, 12, 0.3)'
      },
      width: {
        'icon-64': '64px',
      },
    },
  },
  plugins: [],
}

