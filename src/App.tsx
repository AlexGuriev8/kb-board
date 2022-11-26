import { StoreProvider } from './store/createStoreContext';
import ThemeWrapper from './theme/theme-wrapper';

import './index.css';

function App() {
  return (
    <StoreProvider>
      <ThemeWrapper />
    </StoreProvider>
  );
}

export default App;
