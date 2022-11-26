import useCreateBoard from '../../hooks/useCreateBoard';
import Button from '../button';
import useModal from '../modal/useModal';
import TasksWrapper from './styles';

const Tasks = () => {
  const { isOpen, toggle } = useModal();
  const { renderCreateModal } = useCreateBoard({ isOpen, toggle });

  return (
    <TasksWrapper>
      There is no boards. Create a new board to get started.
      <Button onClick={toggle}>+ Create New Board</Button>
      {renderCreateModal()}
    </TasksWrapper>
  );
};

export default Tasks;
