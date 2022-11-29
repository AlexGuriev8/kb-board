import { useCallback } from 'react';
import Button from '../button';
import useModal from '../modal/useModal';
import { useStore } from '../../store/createStoreContext';

import SidebarWrapper from './styles';
import { BoardIcon } from '../icons';
import useCreateBoard from '../../hooks/create-board/useCreateBoard';

const SidebarBoards = () => {
  const [boards, setStore] = useStore((store) => store.boards);

  const { isOpen, toggle } = useModal();
  const { renderCreateModal } = useCreateBoard({ isOpen, toggle });

  const activeBoard = boards.find((board) => board.active);

  const setActiveBoard = useCallback(
    (id: string) => {
      setStore({
        boards: boards.map((board) => ({
          ...board,
          active: board.id === id,
        })),
      });
    },
    [boards, setStore]
  );

  return (
    <SidebarWrapper>
      <span className="boards-info">ALL BOARDS ({boards.length})</span>
      {boards.map((board) => (
        <Button
          key={board.id}
          asLink
          className={`content ${board.id === activeBoard?.id ? 'active' : ''}`}
          onClick={() => setActiveBoard(board.id)}
        >
          <BoardIcon />
          <span>{board.name}</span>
        </Button>
      ))}
      <Button onClick={toggle} asLink className="content">
        <BoardIcon />
        <span>+ Create New Board</span>
      </Button>
      {renderCreateModal()}
    </SidebarWrapper>
  );
};

export default SidebarBoards;
