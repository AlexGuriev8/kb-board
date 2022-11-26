export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
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
  columns: Column[];
}

export interface Store {
  counter: number;
  mode: 'dark' | 'light';
  boards: Board[];
}

export const appState: Store = {
  boards: [],
  counter: 0,
  mode: 'light',
};
