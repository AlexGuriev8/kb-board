import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import useCreateBoard from '../create-edit-board/useCreateEditBoard';
import IndexColor from '../index-color';
import useModal from '../modal/useModal';
import TasksWrapper, { Container } from './styles';

const Tasks = () => {
  const { isOpen, toggle } = useModal();

  const [boards, setStore] = useStore((store) => store.boards);

  const withBoards = boards.length === 0;
  const activeBoard = boards.find((board) => board.active);
  const activeBoardColumns = activeBoard?.columns || [];

  const { renderCreateModal } = useCreateBoard({
    isOpen,
    toggle,
    mode: withBoards ? 'create' : 'edit',
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
              <div className="tasks">
                <div className="task">Description</div>
              </div>
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
    </TasksWrapper>
  );
};

export default Tasks;
