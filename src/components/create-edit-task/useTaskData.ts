import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../store/types';

const defaultState = {
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
  const [taskData, setTaskData] = useState<Task>(defaultState);

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
    setTaskData(defaultState);
  }, []);

  const setOnTaskEdit = useCallback((data: Task) => {
    setTaskData(data);
  }, []);

  return {
    taskData,
    onNameDescriptionChange,
    onTaskChange,
    onDeleteTask,
    onAddSubtask,
    setOnTaskEdit,
    reset,
  };
};

export default useTasksData;
