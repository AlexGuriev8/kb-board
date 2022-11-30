import styled from '@emotion/styled';

const StyledModalContent = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.heading};
    font-weight: bold;
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
  }

  button {
    margin-top: 10px;
  }

  .columns-wrapper {
    margin: 10px 0;
  }

  .column {
    display: flex;
    align-items: center;

    button {
      margin-left: 10px;
      border-radius: 50%;
      margin-top: 5px;
    }
  }
`;

export default StyledModalContent;
