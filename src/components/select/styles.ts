import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.heading};
    margin: 12px 0 7px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: -webkit-fill-available;
  border: 1px solid #828fa340;
  border-radius: 0.5rem;
  display: inline-block;
  position: relative;
  min-height: 35px;
  font-size: 13px;

  /* :hover {
    border: 1px solid #635fc7;
  } */

  .selected-text {
    padding: 10px 20px;
    cursor: pointer;
  }

  .selected-text::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 16px;
    border: 5px solid transparent;
    border-color: #9999a0 transparent transparent transparent;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    border-radius: 5px;
  }

  .select-options {
    margin-top: 5px;
    width: 100%;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  li {
    list-style-type: none;
    padding: 6px 20px;
    cursor: pointer;
    display: flex;

    &:hover {
      background-color: #efeff9;
    }
  }

  li:first-of-type {
    border-top: 1px solid #e4e4e4;
  }

  .show-dropdown-options {
    min-height: 50px;
    opacity: 1;
    visibility: visible;
  }

  .select-active {
    background-color: #635fc7;
    border-radius: 0.3rem;
    color: #efeff9;

    &:hover {
      background-color: #635fc7;
    }
  }

  .hide-dropdown-options {
    min-height: 0;
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  label {
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.heading};
  }
`;

export default SelectWrapper;
export { Container };
