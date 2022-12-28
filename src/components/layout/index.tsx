import { useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import Button from '@/ui/button';
import Dropdown from '@/ui/dropdown';
import {
  DotsTrigger,
  HideSidebarEye,
  KanbanLogoDark,
  KanbanLogoLight,
  ShowSidebarEye,
} from '@/icons';
import useModal from '@/hooks/useModal';

import LayoutWrapper from './styles';
import { Modes } from '../create-edit-board/types';
import SwitchTheme from '../switch-theme';
import Tasks from '../tasks';
import { Modes as ThemeModes } from '../../theme/types';
import SidebarBoards from '../sidebar-boards';
import { useStore } from '../../store/createStoreContext';
import useCreateBoard from '../create-edit-board/useCreateEditBoard';
import useCreateEditTask from '../create-edit-task/useCreateEditTask';
import useDeleteConfirmation from '../delete-confimartion-board/useDeleteConfirmation';

const Layout = () => {
  const [show, setShow] = useState(true);
  const [mode] = useStore((store) => store.mode);
  const nodeRef = useRef(null);

  const [boards] = useStore((store) => store.boards);
  const withBoards = boards.length === 0;

  const { isOpen, toggle } = useModal();
  const { isOpen: openCreateTask, toggle: onCreateTask } = useModal();
  const { isOpen: isDeleteOpen, toggle: toggleDelete } = useModal();

  const { renderCreateModal } = useCreateBoard({
    isOpen,
    toggle,
    mode: withBoards ? Modes.CREATE : Modes.EDIT,
  });

  const { renderCreateEditModal } = useCreateEditTask({
    isOpen: openCreateTask,
    toggle: onCreateTask,
    mode: 'create',
  });

  const { renderDeleteModal } = useDeleteConfirmation({
    isOpen: isDeleteOpen,
    toggle: toggleDelete,
  });

  const activeBoard = boards.find((board) => board.active);

  return (
    <LayoutWrapper display={show ? 'flex' : 'none'}>
      <header className="header">
        <div className="header_logo">
          {mode === ThemeModes.dark ? <KanbanLogoDark /> : <KanbanLogoLight />}
        </div>
        <div className="header_menu">
          <div>{activeBoard?.name ?? 'Platform Lp'}</div>
          {activeBoard && (
            <div className="flex">
              <Button onClick={onCreateTask}>+ Add New Task</Button>
              <Dropdown
                trigger={
                  <Button color="transparent">
                    <DotsTrigger />
                  </Button>
                }
                menu={[
                  <Button color="transparent" key="1" onClick={toggle}>
                    Edit Board
                  </Button>,
                  <Button color="transparent" key="2" onClick={toggleDelete}>
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
      {renderCreateEditModal()}
      {renderDeleteModal()}
    </LayoutWrapper>
  );
};

export default Layout;
