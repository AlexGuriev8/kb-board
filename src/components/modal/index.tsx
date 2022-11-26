/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import ModalContainer from './styles';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

interface KeyboardEvent {
  key: string;
}

function Modal({ children, isOpen, toggle }: ModalType) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? toggle() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [toggle]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={0}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalContainer ref={nodeRef} onClick={toggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </ModalContainer>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
