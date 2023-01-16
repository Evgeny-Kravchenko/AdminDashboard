import { useMemo } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { ThemeModes } from 'src/shared/enums';
import { ValueOf } from 'src/shared/types/ValueOf';

const colors = {
  grey: {
    100: {
      [ThemeModes.light]: '#141414',
      [ThemeModes.dark]: '#e0e0e0',
    },
    200: { [ThemeModes.light]: '#292929', [ThemeModes.dark]: '#c2c2c2' },
    300: { [ThemeModes.light]: '#3d3d3d', [ThemeModes.dark]: '#a3a3a3' },
    500: { [ThemeModes.light]: '#666666', [ThemeModes.dark]: '#666666' },
    400: { [ThemeModes.light]: '#525252', [ThemeModes.dark]: '#858585' },
    600: { [ThemeModes.light]: '#858585', [ThemeModes.dark]: '#525252' },
    700: { [ThemeModes.light]: '#a3a3a3', [ThemeModes.dark]: '#3d3d3d' },
    800: { [ThemeModes.light]: '#c2c2c2', [ThemeModes.dark]: '#292929' },
    900: { [ThemeModes.light]: '#e0e0e0', [ThemeModes.dark]: '#141414' },
  },
  primary: {
    100: { [ThemeModes.light]: '#040509', [ThemeModes.dark]: '#d0d1d5' },
    200: { [ThemeModes.light]: '#080b12', [ThemeModes.dark]: '#a1a4ab' },
    300: { [ThemeModes.light]: '#0c101b', [ThemeModes.dark]: '#727681' },
    400: { [ThemeModes.light]: '#f2f0f0', [ThemeModes.dark]: '#434957' },
    500: { [ThemeModes.light]: '#141b2d', [ThemeModes.dark]: '#141b2d' },
    600: { [ThemeModes.light]: '#434957', [ThemeModes.dark]: '#101624' },
    700: { [ThemeModes.light]: '#727681', [ThemeModes.dark]: '#0c101b' },
    800: { [ThemeModes.light]: '#a1a4ab', [ThemeModes.dark]: '#080b12' },
    900: { [ThemeModes.light]: '#d0d1d5', [ThemeModes.dark]: '#040509' },
  },
  greenAccent: {
    100: { [ThemeModes.light]: '#0f2922', [ThemeModes.dark]: '#dbf5ee' },
    200: { [ThemeModes.light]: '#1e5245', [ThemeModes.dark]: '#b7ebde' },
    300: { [ThemeModes.light]: '#2e7c67', [ThemeModes.dark]: '#94e2cd' },
    400: { [ThemeModes.light]: '#3da58a', [ThemeModes.dark]: '#70d8bd' },
    500: { [ThemeModes.light]: '#4cceac', [ThemeModes.dark]: '#4cceac' },
    600: { [ThemeModes.light]: '#70d8bd', [ThemeModes.dark]: '#3da58a' },
    700: { [ThemeModes.light]: '#94e2cd', [ThemeModes.dark]: '#2e7c67' },
    800: { [ThemeModes.light]: '#b7ebde', [ThemeModes.dark]: '#1e5245' },
    900: { [ThemeModes.light]: '#dbf5ee', [ThemeModes.dark]: '#0f2922' },
  },
  redAccent: {
    100: { [ThemeModes.light]: '#2c100f', [ThemeModes.dark]: '#f8dcdb' },
    200: { [ThemeModes.light]: '#58201e', [ThemeModes.dark]: '#f1b9b7' },
    300: { [ThemeModes.light]: '#832f2c', [ThemeModes.dark]: '#e99592' },
    400: { [ThemeModes.light]: '#af3f3b', [ThemeModes.dark]: '#e2726e' },
    500: { [ThemeModes.light]: '#db4f4a', [ThemeModes.dark]: '#db4f4a' },
    600: { [ThemeModes.light]: '#e2726e', [ThemeModes.dark]: '#af3f3b' },
    700: { [ThemeModes.light]: '#e99592', [ThemeModes.dark]: '#832f2c' },
    800: { [ThemeModes.light]: '#f1b9b7', [ThemeModes.dark]: '#58201e' },
    900: { [ThemeModes.light]: '#f8dcdb', [ThemeModes.dark]: '#2c100f' },
  },
  blueAccent: {
    100: { [ThemeModes.light]: '#151632', [ThemeModes.dark]: '#e1e2fe' },
    200: { [ThemeModes.light]: '#2a2d64', [ThemeModes.dark]: '#c3c6fd' },
    300: { [ThemeModes.light]: '#3e4396', [ThemeModes.dark]: '#a4a9fc' },
    400: { [ThemeModes.light]: '#535ac8', [ThemeModes.dark]: '#868dfb' },
    500: { [ThemeModes.light]: '#6870fa', [ThemeModes.dark]: '#6870fa' },
    600: { [ThemeModes.light]: '#868dfb', [ThemeModes.dark]: '#535ac8' },
    700: { [ThemeModes.light]: '#a4a9fc', [ThemeModes.dark]: '#3e4396' },
    800: { [ThemeModes.light]: '#c3c6fd', [ThemeModes.dark]: '#2a2d64' },
    900: { [ThemeModes.light]: '#e1e2fe', [ThemeModes.dark]: '#151632' },
  },
};

export const useThemeModeColors = (color: string): string => {
  const { colorMode } = useColorMode();
  return useMemo(() => {
    const splittedColor = color.split('.') as [
      keyof typeof colors,
      keyof ValueOf<typeof colors>
    ];
    const colorGroup = colors[splittedColor[0]];
    if (!colorGroup) return '';
    const colorSubGroup = colorGroup[splittedColor[1]];
    if (!colorSubGroup) return '';
    return colorSubGroup[colorMode];
  }, [colorMode, color]);
};
