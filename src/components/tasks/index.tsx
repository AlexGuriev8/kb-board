/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useStore } from '../../store/createStoreContext';
import Button from '../../ui/button';
import useCreateBoard from '../create-edit-board/useCreateEditBoard';
import useCreateEditTask from '../create-edit-task/useCreateEditTask';
import useModal from '../hooks/useModal';
import IndexColor from '../index-color';
import TasksWrapper, { Container } from './styles';

const Tasks = () => {
  const { isOpen, toggle } = useModal();
  const { isOpen: isToggleEditOpen, toggle: toggleEdit } = useModal();

  const [boards, setStore] = useStore((store) => store.boards);

  const withBoards = boards.length === 0;
  const activeBoard = boards.find((board) => board.active);
  const activeBoardColumns = activeBoard?.columns || [];

  const { renderCreateModal } = useCreateBoard({
    isOpen,
    toggle,
    mode: withBoards ? 'create' : 'edit',
  });
  const { renderCreateEditModal, setOnTaskEdit } = useCreateEditTask({
    isOpen: isToggleEditOpen,
    toggle: toggleEdit,
    mode: 'edit',
  });

  return (
    <TasksWrapper withBoards={!withBoards}>
      {withBoards ? (
        <>
          There is no boards. Create a new board to get started.
          <Button onClick={toggle}>+ Create New Board</Button>
        </>
      ) : (
        <Container>
          {activeBoardColumns.map((column, index) => (
            <div key={column.id} className="column">
              <div className="tasks-length">
                <IndexColor index={index} />
                {column.name} ({column.tasks.length})
              </div>
              {column.tasks.map((task) => (
                <div key={task.id} className="tasks">
                  <div className="task">
                    <span
                      className="task-content_title"
                      onClick={() => {
                        toggleEdit();
                        setOnTaskEdit(task);
                      }}
                    >
                      {task.title}
                    </span>
                    <div className="task-content_description">
                      {task.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
  );
};

export default Tasks;
