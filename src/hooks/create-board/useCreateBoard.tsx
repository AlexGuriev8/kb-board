import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/button';
import Input from '../../components/input';
import Modal from '../../components/modal';
import { useStore } from '../../store/createStoreContext';
import StyledModalContent from './styles';
import { CreateBoard } from './types';
import useColumnsData from '../useColumnsData';

const useCreateBoard = ({ isOpen, toggle }: CreateBoard) => {
  const [boards, setStore] = useStore((store) => store.boards);

  const {
    createData,
    onChange,
    onColumnChange,
    onDeleteColumn,
    onAddColumn,
    reset,
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

  const { name, columns } = createData;

  const renderCreateModal = () => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <StyledModalContent>
          <h4>Add New Board</h4>
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
            <Button onClick={onCreateBoard}>Create New Board</Button>
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
