/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      xs: '1px',
      sm: '480px',
      ss: '576px',
      md: '601px',
      ts: '768px',
      ls: '992px',
      lg: '1024px',
      el: '1200px',
      xl: '1280px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      ...colors,
      rake_grey: {
        50: '#1F2330',
        100: '#cdd3d7',
        200: '#9ca8af',
        250: '#8ca3b8',
        300: '#6a7c87',
        400: '#39515f',
        450: '#293c53',
        500: '#072537',
        600: '#061e2c',
        700: '#041621',
        750: '#04141e66',
        800: '#030f16',
        900: '#01070b',
      },
      rake_background: {
        100: '#cdd0d2',
        200: '#9ba1a5',
        300: '#687278',
        400: '#36434b',
        500: '#04141e',
        600: '#031018',
        700: '#020c12',
        800: '#02080c',
        900: '#010406',
      },
      rake_red: {
        100: '#ffdada',
        200: '#ffb5b5',
        300: '#ff8f8f',
        400: '#ff6a6a',
        500: '#ff4545',
        600: '#cc3737',
        700: '#eb0000',
        800: '#661c1c',
        900: '#330e0e',
      },
      rake_orange: {
        100: '#ffdfcc',
        200: '#ffbe99',
        300: '#ff9e66',
        400: '#ff7d33',
        500: '#ff5d00',
        600: '#cc4a00',
        700: '#993800',
        800: '#662500',
        900: '#331300',
      },
      rake_green: {
        100: '#cdf3cd',
        200: '#9be79b',
        300: '#69db69',
        400: '#37cf37',
        500: '#05c305',
        600: '#049c04',
        700: '#037503',
        800: '#024e02',
        900: '#012701',
      },
      rake_purple: {
        100: '#e0d9ed',
        200: '#c1b3db',
        300: '#a28dc9',
        400: '#8367b7',
        500: '#6441a5',
        600: '#503484',
        700: '#3c2763',
        800: '#281a42',
        900: '#140d21',
      },
      rake_blue: {
        100: '#ccecff',
        200: '#99d9ff',
        300: '#66c6ff',
        400: '#33b3ff',
        500: '#00a0ff',
        600: '#0080cc',
        700: '#006099',
        800: '#004066',
        900: '#002033',
      },
    },
    extend: {
      boxShadow: {
        custom:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        'yellow-shadow':
          'rgb(255, 252, 57) 0px 0px 1px inset, rgb(255, 93, 0) 0px 0px 4px',
        'dark-sm': '0 0 10px rgba(0, 0, 0, .6)', //Blue shadow (for testing purposes)
        'trade-shadow': 'rgba(0, 0, 0, 0.25) 0px 5px 8px -4px, rgba(0, 0, 0, 0.18) 0px 0px 20px 0px, rgba(0, 0, 0, 0.35) 0px 40px 34px -16px'
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'table-scroll-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        width: 'width',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'table-scroll-down': 'table-scroll-down 0.5s ease-out forwards',
      },
      fontFamily: {
        sans: ['"DM Sans", sans-serif', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter", sans-serif'],
        mulish: ['"Mulish", sans-serif'],
        manrope: ['"Manrope", sans-serif'],
        noto: ['"Noto Sans", sans-serif'],
      },
    },
  },
  plugins: [
    import('tailwindcss-animate', import('tailwind-scrollbar')),

    plugin(function ({ addComponents }) {
      addComponents({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    }),
  ],
};
