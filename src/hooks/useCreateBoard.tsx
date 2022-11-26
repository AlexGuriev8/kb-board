import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/button';
import Input from '../components/input';
import Modal from '../components/modal';
import { useStore } from '../store/createStoreContext';
import { Board } from '../store/types';

const StyledModalContent = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.heading};
    font-weight: bold;
  }
  .mr-top {
    margin-top: 5px;
  }

  .mr-header {
    margin-top: 15px;
  }

  .actions {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 10px;
  }

  .columns-wrapper {
    margin: 10px 0;
  }

  .column {
    display: flex;
    align-items: center;

    button {
      margin-left: 10px;
      border-radius: 50%;
      margin-top: 5px;
    }
  }
`;

interface CreateBoard {
  isOpen: boolean;
  toggle: () => void;
}

const defaultState = {
  id: uuidv4(),
  name: '',
  columns: [
    { id: uuidv4(), name: '', description: 'e.g. "To Do"', tasks: [] },
    {
      id: uuidv4(),
      name: '',
      description: 'e.g. "In Progress"',
      tasks: [],
    },
  ],
};

const useColumnsData = () => {
  const [createData, setCreateData] = useState<Board>(defaultState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCreateData((prev) => ({
        ...prev,
        name: e.target.value,
      }));
    },
    [setCreateData]
  );

  const onColumnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setCreateData((prev) => ({
        ...prev,
        columns: prev.columns.map((column) => {
          if (column.id === id) {
            return {
              ...column,
              name: e.target.value,
            };
          }
          return column;
        }),
      }));
    },
    [setCreateData]
  );

  const onDeleteColumn = useCallback(
    (id: string) => {
      setCreateData((prev) => ({
        ...prev,
        columns: prev.columns.filter((column) => column.id !== id),
      }));
    },
    [setCreateData]
  );

  const onAddColumn = useCallback(() => {
    setCreateData((prev) => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          id: uuidv4(),
          name: '',
          description: 'e.g. "Your Column"',
          tasks: [],
        },
      ],
    }));
  }, [setCreateData]);

  return {
    createData,
    onChange,
    onColumnChange,
    onDeleteColumn,
    onAddColumn,
  };
};

const useCreateBoard = ({ isOpen, toggle }: CreateBoard) => {
  const [, setStore] = useStore((store) => store.boards);

  const { createData, onChange, onColumnChange, onDeleteColumn, onAddColumn } =
    useColumnsData();

  const { name, columns } = createData;

  const renderCreateModal = useCallback(() => {
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
            <Button>Create New Board</Button>
          </div>
        </StyledModalContent>
      </Modal>
    );
  }, [
    isOpen,
    toggle,
    name,
    onChange,
    columns,
    onColumnChange,
    onDeleteColumn,
    onAddColumn,
  ]);

  return {
    renderCreateModal,
  };
};

export default useCreateBoard;
