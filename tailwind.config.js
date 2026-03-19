/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#162e4d',
        },
        gold: {
          DEFAULT: '#c5a459',
          dark: '#b0924e',
        },
      },
    },
  },
  plugins: [],
};
