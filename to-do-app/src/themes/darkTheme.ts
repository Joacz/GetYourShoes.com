import { createTheme } from '@nextui-org/react';

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#f1a83b',
      primaryLight: '#3e9c9e',
      primaryContrast: '#c14e38',
      primarySolidContrast: '#136263',
      primarySolidHover: '#c14e38',
      gradient: 'linear-gradient(40deg, $primary 20%, $primaryContrast 90%)',
    },
  },
});
