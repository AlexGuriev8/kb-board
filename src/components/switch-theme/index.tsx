import { useThemeContext } from '../../themes/switch-theme-provider';
import { LightTheme, DarkTheme } from '../icons';

import SwitchWrapper from './styles';
import { Modes } from '../../themes/types';

const SwitchTheme = () => {
  const { mode, setMode } = useThemeContext();

  const onChange = () => {
    setMode(mode === Modes.dark ? Modes.light : Modes.dark);
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
