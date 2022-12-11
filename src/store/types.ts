export interface Subtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Column {
  id: string;
  name: string;
  description?: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  name: string;
  active: boolean;
  columns: Column[];
}

export interface Store {
  counter: number;
  mode: 'dark' | 'light';
  boards: Board[];
}

export const appState: Store = {
  boards: [
    {
      id: '1234234',
      name: 'Board',
      active: true,
      columns: [
        {
          id: '1',
          name: 'To Do',
          tasks: [
            {
              id: 'first',
              title: 'Go for a walk',
              description: 'I need this by tomorrow',
              status: 'To Do',
              subtasks: [
                {
                  id: '1',
                  title: '',
                  isCompleted: false,
                },
                {
                  id: '2',
                  title: '',
                  isCompleted: false,
                },
              ],
            },
            {
              id: 'second',
              title: 'Pick up my headphones',
              description: 'I should do this',
              status: 'To Do',
              subtasks: [
                {
                  id: '1',
                  title: '',
                  isCompleted: false,
                },
                {
                  id: '2',
                  title: '',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: '2',
          name: 'In Progress',
          tasks: [],
        },
        {
          id: '3',
          name: 'Done',
          tasks: [],
        },
      ],
    },
  ],
  counter: 0,
  mode: 'light',
};
