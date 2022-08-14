
const colors = require('tailwindcss/colors');

function withOpacityValue(variableName) {
  return `hsla(var(${variableName}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        base: 'inset 0px -3px 0px 0px',
        expanded: 'inset 0px -10px 0px 0px',
      },
      colors: {
        emerald: {
          450: withOpacityValue('--color-emerald-custom'),
        },
      },
      fontSize: {
        xxxs: ['0.625rem', '0.8125rem'], // 10px, 13px
        xxs: ['0.6875rem', '0.875rem'], // 11px, 14px
        tiny: ['0.8125rem', '1rem'], // 13px, 16px
      },
    },
    colors: {
      current: 'currentColor',
      company: {
        lrlv: withOpacityValue('--color-company-lrlv'),
        lvdf: withOpacityValue('--color-company-lvdf'),
        adnstudio: withOpacityValue('--color-company-adnstudio'),
        adnrealty: withOpacityValue('--color-company-adnrealty'),
        vorimmo: withOpacityValue('--color-company-vorimmo'),
        citydrop: withOpacityValue('--color-company-citydrop'),
        bop: withOpacityValue('--color-company-bop'),
        adlead: withOpacityValue('--color-company-adlead'),
      },
      white: colors.white,
      neutral: colors.neutral,
      transparent: 'transparent',
      zinc: colors.zinc,
    },
    fontFamily: {
      // eslint-disable-next-line vue/max-len
      sans: ['CircularStd', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      mono: ['Courier New', 'Courier', 'monospace'],
    },
  },
  plugins: [],
};
