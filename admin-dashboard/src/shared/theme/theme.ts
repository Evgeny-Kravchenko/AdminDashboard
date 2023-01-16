import { extendBaseTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendBaseTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Source Sans Pro', sans-serif",
  },
  components: {
    Heading: {
      sizes: {
        '4xl': {
          fontSize: '4rem',
        },
        '3xl': {
          fontSize: '3.2rem',
        },
        '2xl': {
          fontSize: '2.4rem',
        },
        xl: {
          fontSize: '2rem',
        },
        lg: {
          fontSize: '1.6rem',
        },
        md: {
          fontSize: '1.4rem',
        },
      },
    },
  },
  styles: {
    global: () => ({
      html: {
        fontSize: '10px',
      },
      body: {
        fontSize: '1.6rem',
      },
      'html, body, #root, .app, .content': {
        height: '100%',
        position: 'relative',
      },
      '.app': {
        display: 'flex',
        position: 'relative',
      },
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: '#e0e0e0',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#888888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555555',
      },
    }),
  },
  colors: {
    grey: {
      100: mode('#141414', '#e0e0e0'),
      200: mode('#292929', '#c2c2c2'),
      300: mode('#3d3d3d', '#a3a3a3'),
      400: mode('#525252', '#858585'),
      500: mode('#666666', '#666666'),
      600: mode('#858585', '#525252'),
      700: mode('#a3a3a3', '#3d3d3d'),
      800: mode('#c2c2c2', '#292929'),
      900: mode('#e0e0e0', '#141414'),
    },

    primary: {
      100: mode('#040509', '#d0d1d5'),
      200: mode('#080b12', '#a1a4ab'),
      300: mode('#0c101b', '#727681'),
      400: mode('#f2f0f0', '#434957'),
      500: mode('#141b2d', '#141b2d'),
      600: mode('##434957', '#101624'),
      700: mode('#727681', '#0c101b'),
      800: mode('#a1a4ab', '#080b12'),
      900: mode('#d0d1d5', '#040509'),
    },

    greenAccent: {
      100: mode('#0f2922', '#dbf5ee'),
      200: mode('#1e5245', '#b7ebde'),
      300: mode('#2e7c67', '#94e2cd'),
      400: mode('#3da58a', '#70d8bd'),
      500: mode('#4cceac', '#4cceac'),
      600: mode('#70d8bd', '#3da58a'),
      700: mode('#94e2cd', '#2e7c67'),
      800: mode('#b7ebde', '#1e5245'),
      900: mode('#dbf5ee', '#0f2922'),
    },

    redAccent: {
      100: mode('#2c100f', '#f8dcdb'),
      200: mode('#58201e', '#f1b9b7'),
      300: mode('#832f2c', '#e99592'),
      400: mode('#af3f3b', '#e2726e'),
      500: mode('#db4f4a', '#db4f4a'),
      600: mode('#e2726e', '#af3f3b'),
      700: mode('#e99592', '#832f2c'),
      800: mode('#f1b9b7', '#58201e'),
      900: mode('#f8dcdb', '#2c100f'),
    },
    blueAccent: {
      100: mode('#151632', '#e1e2fe'),
      200: mode('#2a2d64', '#c3c6fd'),
      300: mode('#3e4396', '#a4a9fc'),
      400: mode('#535ac8', '#868dfb'),
      500: mode('#6870fa', '#6870fa'),
      600: mode('#868dfb', '#535ac8'),
      700: mode('#a4a9fc', '#3e4396'),
      800: mode('#c3c6fd', '#2a2d64'),
      900: mode('#e1e2fe', '#151632'),
    },
  },
});
