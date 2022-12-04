import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;

  .menu {
    position: absolute;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    border-radius: 0.5rem;
    border: 1px solid #dcdee2;
    right: 0;
    min-width: 130px;
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  .menu > li {
    margin: 0;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
  }

  .menu > li {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    border-radius: 0.5rem;
    color: ${(props) => props.theme.colors.hovers.danger};
    &:hover {
      background-color: #efeff9;
      color: #635fc7;
    }
  }

  .menu > li:nth-child(2) {
    &:hover {
      background-color: #efeff9;
      color: red;
    }
  }

  .menu > li > button {
    width: 100%;
    height: 100%;
    text-align: left;

    color: inherit;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }
`;

export default Container;
