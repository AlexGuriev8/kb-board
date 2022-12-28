import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useStore } from '@/store/createStoreContext';
import useModal from '@/hooks/useModal';
import Button from '@/ui/button';

import useCreateBoard from '../create-edit-board/useCreateEditBoard';
import useCreateEditTask from '../create-edit-task/useCreateEditTask';
import IndexColor from '../index-color';
import TasksWrapper, { Container } from './styles';
import { Task } from './task';
import { Task as TTask } from '@/store/types';
import { Modes } from '../create-edit-board/types';
import useSaveActiveBoard from '@/hooks/useSaveActiveBoard';

const Tasks = () => {
  const { isOpen, toggle } = useModal();
  const { isOpen: isToggleEditOpen, toggle: toggleEdit } = useModal();

  const { activeBoard, setBoardToStore } = useSaveActiveBoard();

  const [boards] = useStore((store) => store.boards);

  const withBoards = boards.length === 0;
  const activeBoardColumns = activeBoard?.columns || [];

  const columns = activeBoard?.columns || [];

  const { renderCreateModal } = useCreateBoard({
    isOpen,
    toggle,
    mode: withBoards ? Modes.CREATE : Modes.EDIT,
  });

  const { renderCreateEditModal, setOnTaskEdit } = useCreateEditTask({
    isOpen: isToggleEditOpen,
    toggle: toggleEdit,
    mode: Modes.EDIT,
  });

  const onTitleClick = (task: TTask) => {
    toggleEdit();
    setOnTaskEdit(task);
  };

  const onDragEnd = (result: DropResult) => {
    if (!activeBoard) return;
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination?.droppableId) {
      //move tasks between columns
      const sourceColumn = columns.find(
        (column) => column.id === source.droppableId
      );
      const destinationColumn = columns.find(
        (column) => column.id === destination.droppableId
      );

      if (!sourceColumn || !destinationColumn) return;

      const sourceTasks = sourceColumn.tasks || [];
      const destinationTasks = destinationColumn.tasks || [];

      const [removed] = sourceTasks.splice(source.index, 1);

      destinationTasks.splice(destination.index, 0, removed);

      const newColumns = columns.map((column) => {
        if (column.id === source.droppableId) {
          return {
            ...column,
            tasks: sourceTasks,
          };
        }

        if (column.id === destination.droppableId) {
          return {
            ...column,
            tasks: destinationTasks,
          };
        }

        return column;
      });

      const currentBoard = {
        ...activeBoard,
        columns: newColumns,
      };

      setBoardToStore(currentBoard);
    } else {
      //reorder tasks in the same column
      const column = columns.find((column) => column.id === source.droppableId);

      if (!column) return;

      const copiedTasks = [...column.tasks];
      const [removed] = copiedTasks.splice(source.index, 1);

      copiedTasks.splice(destination.index, 0, removed);

      const newColumns = columns.map((column) => {
        if (column.id === source.droppableId) {
          return {
            ...column,
            tasks: copiedTasks,
          };
        }

        return column;
      });

      const currentBoard = {
        ...activeBoard,
        columns: newColumns,
      };

      setBoardToStore(currentBoard);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TasksWrapper withBoards={!withBoards}>
        {withBoards ? (
          <>
            There is no boards. Create a new board to get started.
            <Button onClick={toggle}>+ Create New Board</Button>
          </>
        ) : (
          <Container>
            {activeBoardColumns.map((column, index) => (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    className="column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="tasks-length">
                      <IndexColor index={index} />
                      {column.name} ({column.tasks.length})
                    </div>
                    {column.tasks.map((task, idx) => (
                      <Task
                        key={task.id}
                        task={task}
                        index={idx}
                        onTitleClick={() => onTitleClick(task)}
                      />
                    ))}
                  </div>
                )}
              </Droppable>
            ))}
            {activeBoardColumns.length < 5 && (
              <div className="column">
                <Button onClick={toggle} asLink>
                  New Column
                </Button>
              </div>
            )}
          </Container>
        )}

        {renderCreateModal()}
        {renderCreateEditModal()}
      </TasksWrapper>
    </DragDropContext>
  );
};

export default Tasks;
