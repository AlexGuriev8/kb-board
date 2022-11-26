import { ThemeProvider } from '@emotion/react';

import CustomLayout from '../components/custom-layout';
import { useStore } from '../store/createStoreContext';

import { darkTheme, lightTheme, Modes } from './types';

const ThemeWrapper = () => {
  const [mode] = useStore((store) => store.mode);

  const theme = mode === Modes.dark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CustomLayout />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
