/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        purple: '#652CD1',
        'light-purple': '#845EEE',
        dark: '#121826',
        'semi-light-dark': '#212936',
        'light-dark': '#394150',
        'dark-gray': '#4D5562',
        gray: '#A1A1A9',
        'semi-white': '#E5E7EB'
      }
    }
  },
  plugins: []
}
