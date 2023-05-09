
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
        base: 'inset 0px -2px 0px 0px',
        expanded: 'inset 0px -5px 0px 0px',
      },
      fontSize: {
        xxxs: ['0.625rem', '0.8125rem'], // 10px, 13px
        xxs: ['0.6875rem', '0.875rem'], // 11px, 14px
        tiny: ['0.8125rem', '1rem'], // 13px, 16px
      },
    },
    fontFamily: {
      // eslint-disable-next-line vue/max-len
      sans: ['CircularStd', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      mono: ['Courier New', 'Courier', 'monospace'],
    },
  },
  plugins: [],
};
