import { useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import {
  HideSidebarEye,
  KanbanLogoDark,
  KanbanLogoLight,
  ShowSidebarEye,
} from '../icons';
import LayoutWrapper from './styles';
import SwitchTheme from '../switch-theme';
import Tasks from '../tasks';
import { Modes } from '../../theme/types';
import Button from '../button';
import SidebarBoards from '../sidebar-boards';
import { useStore } from '../../store/createStoreContext';

const Layout = () => {
  const [show, setShow] = useState(true);
  const [mode] = useStore((store) => store.mode);
  const nodeRef = useRef(null);
  return (
    <LayoutWrapper display={show ? 'flex' : 'none'}>
      <header className="header">
        <div className="header_logo">
          {mode === Modes.dark ? <KanbanLogoDark /> : <KanbanLogoLight />}
        </div>
        <div className="header_menu">
          <div>Platform Launch</div>
          <Button>Delete Board</Button>
        </div>
      </header>
      <CSSTransition in={show} timeout={1000} nodeRef={nodeRef}>
        <main className="content">
          <div className="content_sidebar">
            <SidebarBoards />
            <div className="content_actions">
              <SwitchTheme />
              <div className="content_button-wrapper">
                <Button
                  onClick={() => setShow(false)}
                  className="content_hide-button"
                  asLink
                >
                  <HideSidebarEye />
                  <span>Hide Sidebar</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="content_info">
            <Tasks />
          </div>
        </main>
      </CSSTransition>

      {!show && (
        <Button
          asLink
          onClick={() => setShow(true)}
          className={`content_show-button ${mode}`}
        >
          <ShowSidebarEye />
        </Button>
      )}
    </LayoutWrapper>
  );
};

export default Layout;
