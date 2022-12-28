import { Board, Task } from '@/store/types';

const swapTasks = (currentBoard: Board, taskData: Task) => {
  let board = { ...currentBoard };

  // Find the column where the task is located
  const currentColumn = board.columns.find((column) =>
    column.tasks.find((task) => task.id === taskData.id)
  );
  // Find the column where the task is going to be moved
  const newColumn = board.columns.find(
    (column) => column.name === taskData.status
  );

  if (!currentColumn || !newColumn || currentColumn.name === newColumn.name)
    return board;

  // Remove the task from the current column
  const newCurrentColumn = {
    ...currentColumn,
    tasks: currentColumn.tasks.filter((task) => task.id !== taskData.id),
  };

  // Add the task to the new column
  const newNewColumn = {
    ...newColumn,
    tasks: [...newColumn.tasks, taskData],
  };

  // Swap the columns
  board.columns = board.columns.map((column) => {
    if (column.id === newCurrentColumn.id) {
      return newCurrentColumn;
    }
    if (column.id === newNewColumn.id) {
      return newNewColumn;
    }
    return column;
  });

  return board;
};

export default swapTasks;
