/** @type {import('tailwindcss').Config} */

// const { relative } = require('path');

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: "class",
  theme: {
    fontSize: {
      sm: '1rem',     // 小螢幕字體大小
      md: '1.75rem',   // 中螢幕字體大小
      lg: '2.25rem',     // 大螢幕字體大小
      xl: '3.5rem',   // 超大螢幕字體大小
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      black: '#090C02',
      white: '#ffffff',
      white50: 'rgba(255,255,255,0.5 )',
      black50: 'rgba(0,0,0,0.5 )',


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
      sm: { max: '678px' },
      // => @media (min-width: 375px) { ... }
      md: { min: '678px' },
      lg: { min: '1440px' },
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
          letterSpacing: '2px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h2: {
          fontSize: '40px',
          lineHeight: '44px',
          letterSpacing: '1.5px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',

        },
        h3: {
          fontSize: '32px',
          lineHeight: '36px',
          letterSpacing: '1.15px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h4: {
          fontSize: '28px',
          lineHeight: '38px',
          letterSpacing: '2px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h5: {
          fontSize: '24px',
          lineHeight: '33px',
          letterSpacing: '1.7px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        h6: {
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '1.3px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
          textTransform: 'uppercase',
        },
        p: {
          fontSize: '15px',
          lineHeight: '25px',
          color: theme('colors.black'),
          fontWeight: theme('fontWeight.regular'),
        },
        a: {
          fontSize: '12px',
          color: theme('colors.white'),
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: theme('fontWeight.media'),
          '&:hover': {
            color: theme('colors.primary'),
          },
        },
      }),
        addComponents({
          '.overline2': {
            fontSize: '14px',
            lineHeight: '19px',
            letterSpacing: '10px',
            fontWeight: theme('fontWeight.regular'),
            color: theme('colors.white'),
            opacity: '50%',
            textTransform: 'uppercase',
          },
          '.sub-title': {
            fontSize: '13px',
            lineHeight: '25px',
            letterSpacing: '1px',
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.primary'),
            textTransform: 'uppercase',
          },
          '.btn': {
            fontSize: '13px',
            fontWeight: theme('fontWeight.bold'),
            padding: '15px 30px',
            borderRadius: '0',
            backgroundColor: theme('colors.primary'),
            color: theme('colors.white'),
            textTransform: 'uppercase',

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

            color: theme('colors.black'),
            outline: `1px solid ${theme('colors.black')}`,
            textTransform: 'uppercase',

            '&:hover': {
              cursor: 'pointer',
              color: theme('colors.white'),
              backgroundColor: theme('colors.black'),
            }
          },
          '.btn-3': {
            position: 'relative',
            fontSize: '13px',
            fontWeight: theme('fontWeight.bold'),
            borderRadius: '0',
            color: theme('colors.black50'),
            textTransform: 'uppercase',

            '&:hover': {
              cursor: 'pointer',
              color: theme('colors.primary'),
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
