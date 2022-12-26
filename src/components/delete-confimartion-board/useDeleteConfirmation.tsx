import { useCallback, useMemo } from 'react';
import Button from '@/ui/button';

import SharedModalContent from '../shared-modal';
import ModalHeader from '../shared-modal/modal-header';
import ModalActions from '../shared-modal/modal-actions';

import { useStore } from '../../store/createStoreContext';
import { StyledHeader, StyledActions } from './styles';
import { DeleteConfirmationProps } from './types';

const useDeleteConfirmation = ({ isOpen, toggle }: DeleteConfirmationProps) => {
  const [boards, setStore] = useStore((store) => store.boards);

  const activeBoard = boards.find((board) => board.active);

  const onDeleteBoard = useCallback(() => {
    setStore({
      boards: boards.filter((board) => board.id !== activeBoard?.id),
    });
    toggle();
  }, [setStore, boards, activeBoard, toggle]);

  const renderHeader = useMemo(() => {
    return (
      <StyledHeader>
        Are you sure you want to delete the
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
      <SharedModalContent
        isOpen={isOpen}
        toggleOpen={toggle}
        title="Delete Board"
        danger
      >
        <ModalHeader>{renderHeader}</ModalHeader>
        <ModalActions>{renderActions}</ModalActions>
      </SharedModalContent>
    );
  };

  return {
    renderDeleteModal,
  };
};

export default useDeleteConfirmation;
