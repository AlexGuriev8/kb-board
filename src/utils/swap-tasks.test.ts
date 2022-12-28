import { Board, Task } from '@/store/types';
import swapTasks from './swap-tasks';

describe('swapTasks', () => {
  it('should swap tasks between columns', () => {
    const currentBoard: Board = {
      id: 'board-1',
      name: 'Board 1',
      active: true,
      columns: [
        {
          id: 'col-1',
          name: 'To Do',
          tasks: [
            {
              id: 'task-1',
              title: 'Task 1',
              status: 'To Do',
              description: 'Task 1 description',
              subtasks: [],
            },
            {
              id: 'task-2',
              title: 'Task 2',
              status: 'To Do',
              description: 'Task 2 description',
              subtasks: [],
            },
          ],
        },
        {
          id: 'col-2',
          name: 'In Progress',
          tasks: [
            {
              id: 'task-3',
              title: 'Task 3',
              status: 'In Progress',
              description: 'Task 3 description',
              subtasks: [],
            },
            {
              id: 'task-4',
              title: 'Task 4',
              status: 'In Progress',
              description: 'Task 4 description',
              subtasks: [],
            },
          ],
        },
      ],
    };

    const task: Task = {
      id: 'task-1',
      title: 'Task 1',
      description: 'Task 1 description',
      subtasks: [],
      status: 'In Progress',
    };

    const newBoard = swapTasks(currentBoard, task);

    expect(newBoard).toEqual({
      id: 'board-1',
      name: 'Board 1',
      active: true,
      columns: [
        {
          id: 'col-1',
          name: 'To Do',
          tasks: [
            {
              id: 'task-2',
              title: 'Task 2',
              status: 'To Do',
              description: 'Task 2 description',
              subtasks: [],
            },
          ],
        },
        {
          id: 'col-2',
          name: 'In Progress',
          tasks: [
            {
              id: 'task-3',
              title: 'Task 3',
              status: 'In Progress',
              description: 'Task 3 description',
              subtasks: [],
            },
            {
              id: 'task-4',
              title: 'Task 4',
              status: 'In Progress',
              description: 'Task 4 description',
              subtasks: [],
            },
            {
              id: 'task-1',
              title: 'Task 1',
              status: 'In Progress',
              description: 'Task 1 description',
              subtasks: [],
            },
          ],
        },
      ],
    });
  });
});
