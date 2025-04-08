/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mori: ['PP Mori', 'sans-serif'],
      },
      colors: {
        'primary-green': 'var(--primary-green)',
      },
      animation: {
        'bounce-short': 'bounce 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};