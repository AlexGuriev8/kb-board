import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import Input from '../input';
import Modal from '../modal';
import StyledModalContent from './styles';
import { CreateBoard } from './types';
import useColumnsData from './useColumnsData';

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

  const modes = {
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

  useEffect(() => {
    if (mode === 'edit') {
      const activeBoard = boards.find((board) => board.active);

      if (activeBoard) {
        setOnBoardEdit(activeBoard);
      }
    }
  }, [mode, boards, setOnBoardEdit]);

  const { name, columns } = createData;

  const renderCreateModal = () => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <StyledModalContent>
          <h4>{modes[mode].title}</h4>
          <Input
            name="name"
            label="Board Name"
            value={name}
            placeholder='e.g. "My Board"'
            onChange={onChange}
            className="mr-header"
          />
          <div className="columns-wrapper">
            {columns.map(({ id, name: columnName, description }, index) => (
              <div className="column" key={id}>
                <Input
                  name={id}
                  label={`Column ${index + 1}`}
                  value={columnName}
                  placeholder={description}
                  onChange={(e) => onColumnChange(e, id)}
                  className="mr-top"
                  withAction={
                    <Button
                      disabled={columns.length === 2}
                      asLink
                      onClick={() => onDeleteColumn(id)}
                    >
                      -
                    </Button>
                  }
                />
              </div>
            ))}
          </div>

          <div className="actions">
            <Button
              color="secondary"
              onClick={onAddColumn}
              disabled={columns.length === 5}
            >
              + Add New Column
            </Button>
            <Button onClick={modes[mode].onSubmit}>{modes[mode].action}</Button>
          </div>
        </StyledModalContent>
      </Modal>
    );
  };

  return {
    renderCreateModal,
  };
};

export default useCreateBoard;
