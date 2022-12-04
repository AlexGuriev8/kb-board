import { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import Modal from '../modal';
import SharedModalContent from '../shared-modal';
import { StyledHeader, StyledActions } from './styles';

const useDeleteConfirmation = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const [boards, setStore] = useStore((store) => store.boards);

  const activeBoard = boards.find((board) => board.active);

  const onDeleteBoard = useCallback(() => {
    setStore({
      boards: boards.filter((board) => board.id !== activeBoard?.id),
    });
  }, [setStore, boards, activeBoard]);

  const renderHeader = useMemo(() => {
    return (
      <StyledHeader>
        Are you sure you want to delete the{' '}
        <span>{`'${activeBoard?.name}'`}</span> board? This action will remove
        all columns and tasks and cannot be reversed.
      </StyledHeader>
    );
  }, [activeBoard]);

  const renderActions = useMemo(() => {
    return (
      <StyledActions>
        <Button onClick={onDeleteBoard} color="danger">
          Delete
        </Button>
        <Button onClick={toggle} color="secondary">
          Cancel
        </Button>
      </StyledActions>
    );
  }, [onDeleteBoard, toggle]);

  const renderDeleteModal = () => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <SharedModalContent
          title="Delete Board"
          danger
          actions={renderActions}
          header={renderHeader}
        />
      </Modal>
    );
  };

  return {
    renderDeleteModal,
  };
};

export default useDeleteConfirmation;
