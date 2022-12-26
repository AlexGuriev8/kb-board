import { useCallback, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/ui/button';
import Input from '@/ui/input';

import SharedModalContent from '../shared-modal';
import ModalHeader from '../shared-modal/modal-header';
import ModalContent from '../shared-modal/modal-content';
import ModalActions from '../shared-modal/modal-actions';
import useColumnsData from './useColumnsData';

import { useStore } from '../../store/createStoreContext';
import { DeleteIcon } from '../../icons';
import { CreateBoard } from './types';

const useCreateBoard = ({ isOpen, toggle, mode }: CreateBoard) => {
  const [boards, setStore] = useStore((store) => store.boards);

  const {
    createData,
    onChange,
    onColumnChange,
    onDeleteColumn,
    onAddColumn,
    reset,
    setOnBoardEdit,
  } = useColumnsData();

  const onCreateBoard = useCallback(() => {
    setStore({
      boards: [
        ...boards.map((board) => ({ ...board, active: false })),
        {
          ...createData,
          active: true,
          id: uuidv4(),
        },
      ],
    });
    reset();
    toggle();
  }, [toggle, createData, setStore, boards, reset]);

  const onEditBoard = useCallback(() => {
    setStore({
      boards: boards.map((board) =>
        board.id === createData.id
          ? {
              ...board,
              name: createData.name,
              columns: createData.columns,
            }
          : board
      ),
    });
    reset();
    toggle();
  }, [toggle, createData, setStore, boards, reset]);

  const modes = useMemo(() => {
    return {
      create: {
        title: 'Create New Board',
        action: 'Create New Board',
        onSubmit: onCreateBoard,
      },
      edit: {
        title: 'Edit Board',
        action: 'Save Changes',
        onSubmit: onEditBoard,
      },
    };
  }, [onCreateBoard, onEditBoard]);

  useEffect(() => {
    if (mode === 'edit') {
      const activeBoard = boards.find((board) => board.active);

      if (activeBoard) {
        setOnBoardEdit(activeBoard);
      }
    }
  }, [mode, boards, setOnBoardEdit]);

  const { name, columns } = createData;

  const renderHeader = useMemo(() => {
    return (
      <Input
        name="name"
        label="Board Name"
        value={name}
        placeholder='e.g. "My Board"'
        onChange={onChange}
        className="mr-header"
      />
    );
  }, [name, onChange]);

  const renderActions = useMemo(() => {
    return (
      <>
        <Button
          color="secondary"
          onClick={onAddColumn}
          disabled={columns.length === 5}
        >
          + Add New Column
        </Button>
        <Button onClick={modes[mode].onSubmit}>{modes[mode].action}</Button>
      </>
    );
  }, [onAddColumn, columns, modes, mode]);

  const getModalColumns = useMemo(() => {
    return (
      <>
        {columns.map(({ id, name: columnName, description }, index) => (
          <div className="column" key={id}>
            <Input
              name={id}
              label={index === 0 ? 'Board Columns' : ''}
              value={columnName}
              placeholder={description}
              onChange={(e) => onColumnChange(e, id)}
              className="mr-top"
              withAction={
                <div className="controls">
                  <Button
                    disabled={columns.length === 2}
                    asLink
                    onClick={() => onDeleteColumn(id)}
                    className="delete-button"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              }
            />
          </div>
        ))}
      </>
    );
  }, [columns, onColumnChange, onDeleteColumn]);

  const renderCreateModal = () => {
    return (
      <SharedModalContent
        isOpen={isOpen}
        toggleOpen={toggle}
        title={modes[mode].title}
      >
        <ModalHeader>{renderHeader}</ModalHeader>
        <ModalContent>{getModalColumns}</ModalContent>
        <ModalActions>{renderActions}</ModalActions>
      </SharedModalContent>
    );
  };

  return {
    renderCreateModal,
  };
};

export default useCreateBoard;
