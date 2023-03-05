/** @type {import('tailwindcss').Config} */

// const { relative } = require('path');

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      black: '#090C02',
      white: '#ffffff',


      primary: '#D87D4A',
      primaryVar: '#FBAF85',


      secondary: '#61C9A8',
      secondaryVar: '#39A784',
      secondaryD: '#27765D',

      highlight: '#EE4C41',
      highlightVar: '#EB2B1E',
      highlightD: '#BA1E12',

      dark: '#101010',
      gray: '#F1F1F1',
      light: '#FAFAFA',
    },
    screens: {
      mobile: { max: '375px' },
      // => @media (min-width: 375px) { ... }
      desktop: { max: '1440px' },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    plugin(({ addBase, addComponents, theme, matchUtilities }) => {
      matchUtilities(
        {
          color: (value) => ({
            backgroundColor: value,
          }),
        },
        { values: theme('color') },
      );
      addBase({
        h1: {
          fontSize: '56px',
          lineHeight: '58px',
          letterSpace: '2px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h2: {
          fontSize: '40px',
          lineHeight: '44px',
          letterSpace: '1.5px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',

        },
        h3: {
          fontSize: '32px',
          lineHeight: '36px',
          letterSpace: '1.15px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h4: {
          fontSize: '28px',
          lineHeight: '38px',
          letterSpace: '2px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h5: {
          fontSize: '24px',
          lineHeight: '33px',
          letterSpace: '1.7px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h6: {
          fontSize: '18px',
          lineHeight: '24px',
          letterSpace: '1.3px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        p: {
          fontSize: '15px',
          lineHeight: '25px',
          color: theme('colors.black'),
          fontWeight: theme('fontWeight.medium'),
        },
        a: {
          fontSize: '12px',
          color: theme('colors.primary'),
          fontWeight: theme('fontWeight.regular'),
          '&:hover': {
            color: theme('colors.primaryVar'),
          },
          '&:visited': {
            color: theme('colors.primaryVar'),
          },
        },
      }),
        addComponents({
          '.btn': {
            fontSize: '13px',
            fontWeight: theme('fontWeight.bold'),
            padding: '15px 30px',
            borderRadius: '0',
            backgroundColor: theme('colors.primary'),
            color: theme('colors.white'),
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: theme('colors.primaryVar'),
            }
          },
          '.btn-2': {
            fontSize: '13px',
            fontWeight: theme('fontWeight.bold'),
            padding: '15px 30px',
            borderRadius: '0',
            backgroundColor: theme('colors.white'),
            color: theme('colors.black'),
            outline: `1px solid ${theme('colors.black') }`,
            '&:hover': {
              cursor: 'pointer',
              color: theme('colors.white'),
              backgroundColor: theme('colors.black'),
            }
          },
          '.icon-btn': {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '.5rem .8rem',
            borderRadius: '.1rem',
            outline: `1px solid ${theme('colors.lightGray')}`,
            h3: {
              color: theme('colors.gray'),
            },
            '&:hover': {
              outline: `2px solid ${theme('colors.gray')}`,
            },
          },
          '.line-text': {
            borderTop: `1px solid ${theme('colors.lightGray')}`,
            width: '100%',
            legend: {
              margin: '0 auto',
              padding: '0 .8rem',
              color: theme('colors.lightGray'),
            },
          },
          '.input-group': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '12px',
            width: '100%',
            '.label': {
              color: theme('colors.gray'),
              fontWeight: theme('fontWeight.medium'),
              marginBottom: '6px',
              '&[data-label=true]': {
                position: 'absolute',
                top: '-10px',
                left: '10px',
                backgroundColor: 'white',
                padding: '2px 4px',
                fontSize: '10px',
                color: theme('colors.primary'),
              },
            },
            '&[data-error=true]': {
              '.label': {
                color: theme('colors.highlight'),
                '&[data-label=true]': {
                  color: theme('colors.highlight'),
                },
              },
              '.inputBox': {
                outline: `2px solid ${theme('colors.highlight')}`,
                '&:focus-within': {
                  outline: `2px solid ${theme('colors.highlight')}`,
                },
              },
            },
            '.inputBox': {
              display: 'flex',
              alignItems: 'center',
              gap: '.3rem',
              width: '100%',
              fontWeight: theme('fontWeight.regular'),
              outline: `1px solid ${theme('colors.gray')}`,
              backgroundColor: theme('colors.white'),
              border: 'none',
              borderRadius: '.5rem',
              padding: '6px 10px',
              input: {
                width: '100%',
                outline: 'none',
                border: 'none',
              },
              '&:focus-within': {
                outline: `1px solid ${theme('colors.primary')}`,
              },
            },
            '.error-text': {
              color: theme('colors.highlight'),
              position: 'absolute',
              bottom: '-22px',
            },
          },
          '.checkbox': {
            fontSize: '12px',
            marginRight: '10px',
            padding: '4px 0px',
            display: 'flex',
            alignItems: 'center',
            input: {
              height: '12px',
              width: '12px',
              marginRight: '4px',
            },
          },
        });
    }),
  ],
};
