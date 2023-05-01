/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--global--color--brand-primary)',
        'primary-100': 'var(--global--color--brand-primary-100)',
        'primary-200': 'var(--global--color--brand-primary-200)',
        'primary-300': 'var(--global--color--brand-primary-300)',
        'primary-400': 'var(--global--color--brand-primary-400)',
        'primary-500': 'var(--global--color--brand-primary-500)',
        'primary-600': 'var(--global--color--brand-primary-600)',
        'primary-700': 'var(--global--color--brand-primary-700)',
        'primary-800': 'var(--global--color--brand-primary-800)',
        'primary-900': 'var(--global--color--brand-primary-900)',

        'bg-primary-button': 'var(--button--primary--BackgroundColor)',
      },
    },
  },
  plugins: [],
};
