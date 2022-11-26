import useCreateBoard from '../../hooks/useCreateBoard';
import Button from '../button';
import useModal from '../modal/useModal';
import { useStore } from '../../store/createStoreContext';

import SidebarWrapper from './styles';
import { BoardIcon } from '../icons';

const SidebarBoards = () => {
  const [boards] = useStore((store) => store.boards);

  const { isOpen, toggle } = useModal();
  const { renderCreateModal } = useCreateBoard({ isOpen, toggle });

  return (
    <SidebarWrapper>
      <span className="boards-info">ALL BOARDS ({boards.length})</span>
      <Button onClick={toggle} asLink className="content">
        <BoardIcon />
        <span>+ Create New Board</span>
      </Button>
      {renderCreateModal()}
    </SidebarWrapper>
  );
};

export default SidebarBoards;
