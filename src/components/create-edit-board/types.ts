export interface CreateBoard {
  isOpen: boolean;
  toggle: () => void;
  mode: Mode;
}

export const Modes = {
  CREATE: 'create',
  EDIT: 'edit',
} as const;

export type Mode = typeof Modes[keyof typeof Modes];
