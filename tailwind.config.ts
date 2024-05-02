/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        btnPrimary: 'var(--button-primary)',
        btnPrimaryHover: 'var(--button-primary-hover)',
        btnPrimaryActive: 'var(--button-primary-active)',

        btnSecondary: 'var(--button-secondary)',
        btnSecondaryHover: 'var(--button-secondary-hover)',
        btnSecondaryActive: 'var(--button-secondary-active)',
      },
      borderColor: {
        btnSecondary: 'var(--button-secondary-border)',
        btnSecondaryHover: 'var(--button-secondary-border-hover)',
      },
    },
  },
  plugins: [],
};
