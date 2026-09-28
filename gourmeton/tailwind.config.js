/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35',
          orangeDark: '#E8541F',
          orangeLight: '#FFE8DC',
          teal: '#0FA3A3',
          dark: '#231F20',
          cream: '#FFF8F3',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(35, 31, 32, 0.25)',
      },
    },
  },
  plugins: [],
}
