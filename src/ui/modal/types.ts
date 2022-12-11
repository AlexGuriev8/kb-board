import { ReactNode } from 'react';

export interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export interface KeyboardEvent {
  key: string;
}
