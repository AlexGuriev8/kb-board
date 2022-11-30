import styled from '@emotion/styled';

const ModalContainer = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.backdrop};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .modal-enter-done {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
  .modal-exit {
    opacity: 0;
    transform: scale(0.4);
  }

  .modal-content {
    display: block;
    background-color: ${(props) => props.theme.colors.modalColor};
    min-width: 370px;
    padding: 1.25rem;
    border-radius: 0.5rem;
  }
`;

export default ModalContainer;
