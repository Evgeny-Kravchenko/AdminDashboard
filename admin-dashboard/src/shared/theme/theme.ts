import { extendTheme } from '@chakra-ui/react';
import { ThemeModes } from 'src/shared/enums';

export const theme = () =>
  extendTheme(() => {
    return {
      config: {
        initialColorMode: ThemeModes.light,
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
        global: () => {
          return {
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
          };
        },
      },
    };
  });
