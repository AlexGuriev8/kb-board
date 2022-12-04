import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Board } from '../../store/types';

const defaultState = {
  id: '',
  name: '',
  active: false,
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
  const [createData, setCreateData] = useState<Board>(() => defaultState);

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

  const reset = useCallback(() => {
    setCreateData(defaultState);
  }, []);

  const setOnBoardEdit = useCallback((data: Board) => {
    setCreateData(data);
  }, []);

  return {
    createData,
    onChange,
    onColumnChange,
    onDeleteColumn,
    onAddColumn,
    reset,
    setOnBoardEdit,
  };
};

export default useColumnsData;
