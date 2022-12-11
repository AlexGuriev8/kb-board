import { useCallback, useMemo } from 'react';

import SharedModalContent from '../shared-modal';
import useTasksData from './useTaskData';
import CustomSelect from '../select';
import TextArea from '../textarea';

import { useStore } from '../../store/createStoreContext';
import { DeleteIcon } from '../icons';
import { CreateBoard } from './types';
import Button from '../../ui/button';
import Modal from '../../ui/modal';
import Input from '../../ui/input';

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
    setStore({
      boards: boards.map((board) => {
        if (board.id === currentBoard.id) {
          return currentBoard;
        }
        return board;
      }),
    });
    reset();
    toggle();
  }, [toggle, reset, setStore, boards, activeBoard, taskData]);

  const onEditTask = useCallback(() => {
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
    setStore({
      boards: boards.map((board) => {
        if (board.id === currentBoard.id) {
          return currentBoard;
        }
        return board;
      }),
    });
    reset();
    toggle();
  }, [toggle, reset, setStore, boards, activeBoard, taskData]);

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

  const renderHeader = useMemo(() => {
    return (
      <>
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
      </>
    );
  }, [title, description, onNameDescriptionChange]);

  const renderActions = useMemo(() => {
    return (
      <>
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
      </>
    );
  }, [onAddSubtask, columns, modes, mode, status, setStatus]);

  const getSubtasks = useMemo(() => {
    return (
      <>
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
      </>
    );
  }, [subtasks, onTaskChange, onDeleteTask]);

  const renderCreateEditModal = () => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <SharedModalContent
          title={modes[mode].title}
          header={renderHeader}
          columns={getSubtasks}
          actions={renderActions}
        />
      </Modal>
    );
  };

  return {
    renderCreateEditModal,
    setOnTaskEdit,
  };
};

export default useCreateEditTask;
