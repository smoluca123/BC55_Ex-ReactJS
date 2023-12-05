/** @type {import('tailwindcss').Config} */

import { defaultColor } from 'tailwindcss/defaultTheme';
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...defaultColor,
        mainText: {
          main: '#c4d2dd',
        },
        lightText: {
          main: '#e8e6e3',
        },
        secondaryText: {
          main: '#becbd7',
        },
        title: {
          main: '#32ffab',
        },
        subTitle: {
          main: '#b0a99f',
        },
        mainBg: {
          main: '#020419',
          100: '#020419a6',
        },
        secondaryBg: {
          main: '#0f1829',
        },
      },
      boxShadow: {
        custom1: '0 17px 40px -8px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
};
