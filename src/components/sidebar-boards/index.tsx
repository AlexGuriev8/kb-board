import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import { BoardIcon } from '../icons';
import Modal from '../modal';
import useModal from '../modal/useModal';
import SidebarWrapper from './styles';

const SidebarBoards = () => {
  const [first, setStore] = useStore((store) => store.first);

  const { isOpen, toggle } = useModal();

  const onClick = () => {};

  return (
    <SidebarWrapper>
      <span className="boards-info">ALL BOARDS (0)</span>
      <Button onClick={toggle} asLink className="content">
        <BoardIcon />
        <span>+ Create New Board</span>
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div>Yaay!!! Our Modal is rendered Properly.</div>
      </Modal>
    </SidebarWrapper>
  );
};

export default SidebarBoards;
