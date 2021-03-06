import { builder } from 'styled-query-builder';

import * as mixins from 'app/styles/mixins';

export const theme = {
  mixins,
  media: builder(
    /**
     * the original sizes are:
     *   small: 57.6
     *   medium: 76.8
     *   large: 102.4
     *   xlarge: 128
     * the below sizes are 62,5% of the above sizes
     */
    { small: 36, medium: 48, large: 64, xlarge: 80 },
    'rem'
  ),
  border: {
    radius: {
      small: '0.4rem',
      medium: '0.8rem',
      large: '1.2rem',
      rounded: '50%',
    },
  },
  color: {
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#FF007F',
    gray: 'rgba(0, 0, 0, 0.6)',
  },
  font: {
    family: {
      primary: 'Raleway',
      secondary: 'Poppins',
      default:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 600,
      xbold: 800,
    },
    size: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '2.0rem',
      large: '2.8rem',
      xlarge: '3.6rem',
      huge: '4.8rem',
      xhuge: '6.0rem',
    },
  },
  grid: {
    container: '128rem',
    gutter: '4rem',
  },
  layer: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  spacing: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
