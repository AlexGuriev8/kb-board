import { LightTheme, DarkTheme } from '../icons';

import SwitchWrapper from './styles';
import { Modes } from '../../themes/types';
import { useStore } from '../../store/createStoreContext';

const SwitchTheme = () => {
  const [mode, setStore] = useStore((store) => store.mode);
  const onChange = () => {
    const sMode = mode === Modes.dark ? Modes.light : Modes.dark;
    setStore({ mode: sMode });
  };

  return (
    <SwitchWrapper>
      <LightTheme />
      <input
        type="checkbox"
        id="toggle"
        className="offscreen"
        checked={mode === Modes.dark}
        onChange={onChange}
      />
      <label htmlFor="toggle" className="switch" />
      <DarkTheme />
    </SwitchWrapper>
  );
};

export default SwitchTheme;
