import {
  Suspense,
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';

import { Mode, Modes } from './types';

const SwitchThemeContext = createContext({
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: (themeMode: Mode) => {},
});

export const useThemeContext = () => {
  const theme = useContext(SwitchThemeContext);
  return theme;
};

const SwitchThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setDarkMode] = useState<Mode>(Modes.light);

  const setMode = useCallback((themeMode: Mode) => setDarkMode(themeMode), []);

  const value = useMemo(() => {
    return { mode, setMode };
  }, [mode, setMode]);

  return (
    <SwitchThemeContext.Provider value={value}>
      <Suspense fallback={<span />} />
      {children}
    </SwitchThemeContext.Provider>
  );
};

export default SwitchThemeProvider;
