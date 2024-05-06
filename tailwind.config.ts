/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
    },
    textColor: {
      base: 'white',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-primary)',

        bgPrimary: 'var(--background-primary)',
        bg200: 'var(--background-200)',
        bg300: 'var(--background-300)',
        bg400: 'var(--background-400)',

        btnPrimary: 'var(--button-primary)',
        btnPrimaryHover: 'var(--button-primary-hover)',
        btnPrimaryActive: 'var(--button-primary-active)',

        btnSecondary: 'var(--button-secondary)',
        btnSecondaryHover: 'var(--button-secondary-hover)',
        btnSecondaryActive: 'var(--button-secondary-active)',
      },
      borderColor: {
        primary: 'var(--color-primary)',

        btnSecondary: 'var(--button-secondary-border)',
        btnSecondaryHover: 'var(--button-secondary-border-hover)',
      },
    },
  },
  plugins: [],
};
