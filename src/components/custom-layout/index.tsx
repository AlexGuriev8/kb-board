import { useState } from 'react';

import {
  HideSidebarEye,
  KanbanLogoDark,
  KanbanLogoLight,
  ShowSidebarEye,
} from '../icons';
import LayoutWrapper from './styles';
import SwitchTheme from '../switch-theme';
import { useThemeContext } from '../../themes/switch-theme-provider';
import Tasks from '../tasks';
import { Modes } from '../../themes/types';
import SidebarBoards from '../sidebar-boards';

const CustomLayout = () => {
  const [show, setShow] = useState(true);
  const { mode } = useThemeContext();

  return (
    <LayoutWrapper display={show ? 'flex' : 'none'}>
      <header className="header">
        <div className="header_logo">
          {mode === Modes.dark ? <KanbanLogoDark /> : <KanbanLogoLight />}
        </div>
        <div className="header_menu">
          <div>Platform Launch</div>
          <button type="button">Add new task </button>
        </div>
      </header>
      <main className="content">
        <div className="content_sidebar">
          <SidebarBoards />
          <div className="content_actions">
            <SwitchTheme />
            <button
              type="button"
              className="content_hide"
              onClick={() => setShow(false)}
            >
              <HideSidebarEye />
              <span>Hide Sidebar</span>
            </button>
          </div>
        </div>
        <div className="content_info">
          <Tasks />
        </div>
      </main>
      {!show && (
        <button
          type="button"
          onClick={() => setShow(true)}
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
          }}
        >
          <ShowSidebarEye />
        </button>
      )}
    </LayoutWrapper>
  );
};

export default CustomLayout;
