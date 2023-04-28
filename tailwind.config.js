/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#538c5d',
        'primary-100': '#e5f5e2',
        'primary-200': '#c8e8c9',
        'primary-300': '#a5d6a7',
        'primary-400': '#81c784',
        'primary-500': '#66bb6a',
        'primary-600': '#4caf50',
        'primary-700': '#43a047',
        'primary-800': '#388e3c',
        'primary-900': '#2e7d32',
      },
    },
  },
  plugins: [],
};
