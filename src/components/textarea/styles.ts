import styled from '@emotion/styled';

const InputWrapper = styled.div`
  position: relative;
  width: -webkit-fill-available;

  .input-box {
    display: flex;
    align-items: center;
  }

  textarea {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: #828fa3;
    padding: 12px 12px 17px;
    min-width: -webkit-fill-available;
    font-size: 12px;
    min-height: 40px;
    border: 1px solid #828fa340;
    border-radius: 5px;
    transition: border, color 0.2s ease-in-out;
    margin-top: 7px;

    ::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }

    :hover {
      border: 1px solid #635fc7;
    }

    :focus {
      outline: 0;
      border: 1px solid #635fc7;
    }
  }
  label {
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.heading};
  }
`;

export default InputWrapper;
