import { useCallback, useMemo } from 'react';

import CustomSelect from '@/ui/select';
import TextArea from '@/ui/textarea';
import Button from '@/ui/button';
import Input from '@/ui/input';

import SharedModalContent from '../shared-modal';
import ModalHeader from '../shared-modal/modal-header';
import ModalContent from '../shared-modal/modal-content';
import ModalActions from '../shared-modal/modal-actions';

import { useStore } from '@/store/createStoreContext';
import { Board, Column, Task } from '@/store/types';
import { DeleteIcon } from '@/icons';

import useTasksData from './useTaskData';
import { CreateBoard } from './types';
import swapTasks from '@/utils/swap-tasks';

const useCreateEditTask = ({ isOpen, toggle, mode }: CreateBoard) => {
  const [boards, setStore] = useStore((store) => store.boards);

  const {
    taskData,
    onNameDescriptionChange,
    onTaskChange,
    onDeleteTask,
    onAddSubtask,
    setOnTaskEdit,
    reset,
    setStatus,
  } = useTasksData();

  const activeBoard = boards.find((board) => board.active);

  const setBoardToStore = useCallback(
    (currentBoard: Board) => {
      if (!activeBoard) return;
      setStore({
        boards: boards.map((board) => {
          if (board.id === currentBoard.id) {
            return currentBoard;
          }
          return board;
        }),
      });
    },
    [activeBoard, setStore, boards]
  );

  const onCreateTask = useCallback(() => {
    if (!activeBoard) return;

    const currentBoard = {
      ...activeBoard,
      columns: activeBoard.columns.map((column) => {
        if (column.name === taskData.status) {
          return {
            ...column,
            tasks: [...column.tasks, taskData],
          };
        }
        return column;
      }),
    };
    setBoardToStore(currentBoard);
    reset();
    toggle();
  }, [toggle, reset, setStore, boards, activeBoard, taskData]);

  const setBoard = useCallback(() => {
    if (!activeBoard) return;
    const currentBoard = {
      ...activeBoard,
      columns: activeBoard.columns.map((column) => {
        return {
          ...column,
          tasks: column.tasks.map((task) => {
            if (task.id === taskData.id) {
              return taskData;
            }
            return task;
          }),
        };
      }),
    };

    const newBoard = swapTasks(currentBoard, taskData);

    setBoardToStore(newBoard);
  }, [setStore, boards, activeBoard, taskData, setBoardToStore]);

  const onEditTask = useCallback(() => {
    setBoard();
    reset();
    toggle();
  }, [toggle, reset, setBoard]);

  const modes = useMemo(() => {
    return {
      create: {
        title: 'Add New Task',
        action: 'Create Task',
        onSubmit: onCreateTask,
      },
      edit: {
        title: 'Edit Task',
        action: 'Save Changes',
        onSubmit: onEditTask,
      },
    };
  }, [onCreateTask, onEditTask]);

  const columns = activeBoard?.columns.map((column) => ({
    value: column.name,
    label: column.name,
  }));

  const { title, status, description, subtasks } = taskData;

  const renderCreateEditModal = () => {
    return (
      <SharedModalContent
        isOpen={isOpen}
        toggleOpen={toggle}
        title={modes[mode].title}
      >
        <ModalHeader>
          <Input
            name="title"
            label="Title"
            value={title}
            placeholder='e.g. "Take a coffee break"'
            onChange={onNameDescriptionChange}
            className="mr-header"
          />
          <TextArea
            name="description"
            label="Description"
            value={description}
            placeholder='e.g. "You deserve it!"'
            onChange={onNameDescriptionChange}
            className="mr-header"
          />
        </ModalHeader>
        <ModalContent>
          {subtasks.map(({ id, title: titleName }, index) => (
            <div className="column" key={id}>
              <Input
                name={id}
                label={index === 0 ? 'Subtasks' : ''}
                value={titleName}
                placeholder={`e.g. "Task ${index + 1}"`}
                onChange={(e) => onTaskChange(e, id)}
                className="mr-top"
                withAction={
                  <Button
                    asLink
                    onClick={() => onDeleteTask(id)}
                    className="delete-button"
                  >
                    <DeleteIcon />
                  </Button>
                }
              />
            </div>
          ))}
        </ModalContent>
        <ModalActions>
          <Button color="secondary" onClick={onAddSubtask}>
            + Add New Subtask
          </Button>
          <CustomSelect
            selectedValue={status}
            setSelectedValue={setStatus}
            options={columns ?? []}
            label="Status"
          />
          <Button onClick={modes[mode].onSubmit}>{modes[mode].action}</Button>
        </ModalActions>
      </SharedModalContent>
    );
  };

  return {
    renderCreateEditModal,
    setOnTaskEdit,
  };
};

export default useCreateEditTask;
