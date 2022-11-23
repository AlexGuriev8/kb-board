import styled from '@emotion/styled';

const ModalContainer = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-box {
    display: block;
    background: white;
    min-width: 420px;
    min-height: 300px;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export default ModalContainer;
