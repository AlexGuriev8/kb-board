import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../store/createStoreContext';
import { Task } from '../../store/types';

const defaultState = {
  id: '',
  title: '',
  description: '',
  status: '',
  subtasks: [
    {
      id: '1',
      title: '',
      isCompleted: false,
    },
    {
      id: '2',
      title: '',
      isCompleted: false,
    },
  ],
};

const useTasksData = () => {
  const [boards] = useStore((store) => store.boards);

  const activeBoard = boards.find((board) => board.active);

  const getDefaultState = useCallback(() => {
    return {
      ...defaultState,
      id: uuidv4(),
      status: activeBoard?.columns[0].name ?? '',
    };
  }, [activeBoard]);

  const [taskData, setTaskData] = useState<Task>(getDefaultState());

  const onNameDescriptionChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLInputElement>
    ) => {
      setTaskData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setTaskData]
  );

  const onTaskChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setTaskData((prev) => ({
        ...prev,
        subtasks: prev.subtasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              title: e.target.value,
            };
          }
          return task;
        }),
      }));
    },
    [setTaskData]
  );

  const onDeleteTask = useCallback(
    (id: string) => {
      setTaskData((prev) => ({
        ...prev,
        subtasks: prev.subtasks.filter((task) => task.id !== id),
      }));
    },
    [setTaskData]
  );

  const onAddSubtask = useCallback(() => {
    setTaskData((prev) => ({
      ...prev,
      subtasks: [
        ...prev.subtasks,
        {
          id: uuidv4(),
          title: '',
          isCompleted: false,
        },
      ],
    }));
  }, [setTaskData]);

  const reset = useCallback(() => {
    setTaskData(getDefaultState());
  }, [getDefaultState]);

  const setOnTaskEdit = useCallback((data: Task) => {
    setTaskData(data);
  }, []);

  const setStatus = useCallback((status: string) => {
    setTaskData((prev) => ({
      ...prev,
      status,
    }));
  }, []);

  return {
    taskData,
    onNameDescriptionChange,
    onTaskChange,
    onDeleteTask,
    onAddSubtask,
    setOnTaskEdit,
    reset,
    setStatus,
  };
};

export default useTasksData;
