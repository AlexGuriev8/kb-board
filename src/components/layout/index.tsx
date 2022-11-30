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
import useModal from '../modal/useModal';
import useCreateBoard from '../create-edit-board/useCreateEditBoard';
import Dropdown from '../dropdown';

const Layout = () => {
  const [show, setShow] = useState(true);
  const [mode] = useStore((store) => store.mode);
  const nodeRef = useRef(null);

  const [boards, setStore] = useStore((store) => store.boards);
  const withBoards = boards.length === 0;

  const { isOpen, toggle } = useModal();
  const { renderCreateModal } = useCreateBoard({
    isOpen,
    toggle,
    mode: withBoards ? 'create' : 'edit',
  });

  const activeBoard = boards.find((board) => board.active);

  const onDeleteBoard = () => {
    setStore({
      boards: boards.filter((board) => board.id !== activeBoard?.id),
    });
  };

  return (
    <LayoutWrapper display={show ? 'flex' : 'none'}>
      <header className="header">
        <div className="header_logo">
          {mode === Modes.dark ? <KanbanLogoDark /> : <KanbanLogoLight />}
        </div>
        <div className="header_menu">
          <div>{activeBoard?.name ?? 'Platform Lp'}</div>
          {activeBoard && (
            <div className="flex">
              <Button onClick={toggle}>+ Add New Task</Button>
              <Dropdown
                trigger={
                  <Button color="transparent">
                    <svg
                      className="fill-medium-grey"
                      width="5"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="evenodd">
                        <circle cx="2.308" cy="2.308" r="2.308" />
                        <circle cx="2.308" cy="10" r="2.308" />
                        <circle cx="2.308" cy="17.692" r="2.308" />
                      </g>
                    </svg>
                  </Button>
                }
                menu={[
                  <Button color="transparent" key="1" onClick={toggle}>
                    Edit Board
                  </Button>,
                  <Button color="transparent" key="2" onClick={onDeleteBoard}>
                    Delete Board
                  </Button>,
                ]}
              />
            </div>
          )}
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
      {renderCreateModal()}
    </LayoutWrapper>
  );
};

export default Layout;
