import React from 'react';
import Button from '../button';
import TasksWrapper from './styles';

const Tasks = () => {
  return (
    <TasksWrapper>
      There is no boards. Create a new board to get started.
      <Button>+ Create New Board</Button>
    </TasksWrapper>
  );
};

export default Tasks;
