import styled from '@emotion/styled';

const StyledModalContent = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.heading};
    font-weight: bold;
  }

  textarea {
    min-width: 420px;
    max-width: 420px;
    min-height: 50px;
  }

  .mr-top {
    margin-top: 5px;
  }

  .mr-header {
    margin-top: 15px;
  }

  .actions {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 13px;
    }
  }

  .delete-button {
    margin-top: 10px;

    svg {
      fill: #828fa3;
    }

    &:hover {
      background-color: transparent;

      svg {
        fill: red;
      }
    }
  }

  .columns-wrapper {
    margin: 10px 0;
  }

  .column {
    display: flex;
    align-items: center;

    button {
      margin-left: 10px;
      margin-top: 5px;
      border-radius: 50%;
    }
  }
`;

export default StyledModalContent;
