import styled from '@emotion/styled';

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.switchBgColor};
  width: -webkit-fill-available;
  margin: 0 15px 10px;
  padding: 15px;

  .switch {
    position: relative;
    display: inline-block;
    width: 37px;
    height: 17px;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    transition: all 0.3s;
    margin: 0 20px;
    cursor: pointer;
  }

  .switch::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }

  input[type='checkbox']:checked + .switch::after {
    transform: translateX(20px);
  }

  input[type='checkbox']:checked + .switch {
    background-color: #7983ff;
  }

  .offscreen {
    position: absolute;
    left: -9999px;
  }
`;

export default SwitchWrapper;
