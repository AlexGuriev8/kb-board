import useCreateBoard from '../../hooks/create-board/useCreateBoard';
import { useStore } from '../../store/createStoreContext';
import Button from '../button';
import IndexColor from '../index-color';
import useModal from '../modal/useModal';
import TasksWrapper, { Container } from './styles';

const Tasks = () => {
  const { isOpen, toggle } = useModal();
  const { renderCreateModal } = useCreateBoard({ isOpen, toggle });
  const [boards, setStore] = useStore((store) => store.boards);

  const withBoards = boards.length === 0;
  const activeBoard = boards.find((board) => board.active);
  const activeBoardColumns = activeBoard?.columns || [];

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
        </Container>
      )}

      {renderCreateModal()}
    </TasksWrapper>
  );
};

export default Tasks;
