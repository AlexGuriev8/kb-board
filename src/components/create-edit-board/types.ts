export interface CreateBoard {
  isOpen: boolean;
  toggle: () => void;
  mode: 'create' | 'edit';
}
