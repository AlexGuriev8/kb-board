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
    min-width: 420px;
    padding: 1.25rem;
    border-radius: 0.5rem;
    overflow-y: scroll;
    max-height: 90vh;
  }

  .modal-content::-webkit-scrollbar {
    width: 3px;
  }

  .modal-content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px transparent;
  }

  .modal-content::-webkit-scrollbar-thumb {
    background-color: #635fc7;
    outline: 1px solid slategrey;
  }
`;

export default ModalContainer;
