import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import { DeleteIcon } from '../icons';
import Input from '../input';
import Modal from '../modal';
import CustomSelect from '../select';
import TextArea from '../textarea';
import StyledModalContent from './styles';
import { CreateBoard } from './types';
import useTasksData from './useTaskData';

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

  const modes = {
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

  const renderCreateModal = () => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <StyledModalContent>
          <h4>{modes[mode].title}</h4>
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

          <div className="columns-wrapper">
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
          </div>

          <div className="actions">
            <Button color="secondary" onClick={onAddSubtask}>
              + Add New Subtask
            </Button>
            <CustomSelect
              selectedValue={selected}
              options={columns ?? []}
              label="Status"
            />
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

export default useCreateEditTask;
