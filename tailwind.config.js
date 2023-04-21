/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#ffff",
        primary: "#FF4800",
        text: {
          inactive: "rgba(255,255,255,0.7)"
        },
        switch: {
          default: "#70BC63",
          light: "rgba(112, 188, 99, 0.2)"
        },
        light: "rgba(255,255,255,0.1)"
      }
    },
  },
  plugins: [],
}