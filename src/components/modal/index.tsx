/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode } from 'react';
import ModalContainer from './styles';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Modal({ isOpen, children, toggle }: ModalType) {
  return (
    <>
      {isOpen && (
        <ModalContainer onClick={toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {children}
          </div>
        </ModalContainer>
      )}
    </>
  );
}

export default Modal;
