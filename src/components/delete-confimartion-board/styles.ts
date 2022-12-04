import styled from '@emotion/styled';

const StyledHeader = styled.div`
  width: 420px;
  margin: 25px 0;
  color: ${(props) => props.theme.colors.primary};

  span {
    font-weight: bold;
  }
`;
const StyledActions = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
  }
`;

export { StyledHeader, StyledActions };
