/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Spacemono',
        secondary: 'Orelegaone',
      },
      fontSize: {
        'fluid-base': 'var(--fluid-fs-base)',
        'fluid-header': 'var(--fluid-fs-header)',
      },
      colors: {
        accent: {
          100: 'rgb(var(--clr-accent-100))',
          800: 'rgb(var(--clr-accent-800))',
          900: 'rgb(var(--clr-accent-900))',
        }
      }
    },
  },
  plugins: [],
}