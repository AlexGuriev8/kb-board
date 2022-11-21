import { ThemeProvider } from '@emotion/react';

import CustomLayout from '../components/custom-layout';
import { useThemeContext } from './switch-theme-provider';

import { darkTheme, lightTheme, Modes } from './types';

const ThemeWrapper = () => {
  const { mode } = useThemeContext();

  const theme = mode === Modes.dark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CustomLayout />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
