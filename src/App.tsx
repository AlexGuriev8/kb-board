import SwitchThemeProvider from './themes/switch-theme-provider';
import ThemeWrapper from './themes/theme-wrapper';

import './index.css';

function App() {
  return (
    <SwitchThemeProvider>
      <ThemeWrapper />
    </SwitchThemeProvider>
  );
}

export default App;
