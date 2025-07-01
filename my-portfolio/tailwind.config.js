/ @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f3f4f6',  // gray-100
        },
        secondary: {
          light: '#10b981',
          dark: '#34d399',
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'blink': 'blink 1s steps(11) infinite',
      },
      keyframes: {
        typewriter: {
          to: { left: '100%' },
        },
        blink: {
          '0%': { opacity: '0' },
          '0.1%': { opacity: '1' },
          '50%': { opacity: '1' },
          '50.1%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}