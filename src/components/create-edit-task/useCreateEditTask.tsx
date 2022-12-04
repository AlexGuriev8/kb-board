import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SharedModalContent from '../shared-modal';
import useTasksData from './useTaskData';
import CustomSelect from '../select';
import TextArea from '../textarea';
import Button from '../button';
import Modal from '../modal';
import Input from '../input';

import { useStore } from '../../store/createStoreContext';
import { DeleteIcon } from '../icons';
import { CreateBoard } from './types';

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
  } = useTasksData();

  const onCreateTask = useCallback(() => {
    reset();
    toggle();
  }, [toggle, reset]);

  const onEditTask = useCallback(() => {
    reset();
    toggle();
  }, [toggle, reset]);

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

  const activeBoard = boards.find((board) => board.active);

  useEffect(() => {
    if (mode === 'edit') {
      if (activeBoard) {
        // setOnTaskEdit(activeBoard);
      }
    }
  }, [mode, activeBoard, setOnTaskEdit]);

  const columns = activeBoard?.columns.map((column) => ({
    value: column.name,
    label: column.name,
  }));

  const { title, description, subtasks } = taskData;

  const [selected, setSelected] = useState(columns ? columns[0]?.label : '');

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
          selectedValue={selected}
          options={columns ?? []}
          label="Status"
        />
        <Button onClick={modes[mode].onSubmit}>{modes[mode].action}</Button>
      </>
    );
  }, [onAddSubtask, selected, columns, modes, mode]);

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
                  disabled={subtasks.length === 2}
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

  const renderCreateModal = () => {
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
    renderCreateModal,
  };
};

export default useCreateEditTask;
