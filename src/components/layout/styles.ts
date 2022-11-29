import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyle = (props: { display: string }) =>
  css`
    display: ${props.display};
  `;

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  color: ${(props) => props.theme.colors.primary};

  .header {
    height: 100px;
    display: flex;

    &_logo {
      border-right: 1px solid ${(props) => props.theme.colors.borderRightColor};
      min-width: 270px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: ${(props) => props.theme.colors.backgroundColor};
    }

    &_menu {
      width: calc(100% - 270px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      border-bottom: 1px solid #dfdbdf;
      padding: 0 20px;
      background-color: ${(props) => props.theme.colors.backgroundColor};
    }
  }

  .dark,
  .light {
    background-color: #635fc7;

    svg {
      fill: #9f9f9f;
    }
  }

  .content {
    height: 100%;
    display: flex;

    &_sidebar {
      min-width: 270px;
      display: flex;
      padding: 10px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      ${dynamicStyle}
      background-color: ${(props) => props.theme.colors.backgroundColor};
      border-right: 1px solid ${(props) => props.theme.colors.borderRightColor};
    }

    &_actions {
      width: -webkit-fill-available;
      padding: 10px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &_hide-button {
      display: flex;
      align-items: center;
      width: -webkit-fill-available;

      span {
        margin-left: 10px;
      }
    }

    &_show-button {
      position: absolute;
      bottom: 10%;
      left: 0;
    }

    &_button-wrapper {
      width: -webkit-fill-available;
      margin: 0 20px 0 0;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &_info {
      padding: 20px 20px;
      flex: 1;
      width: calc(100% - 270px);
      display: flex;
      background-color: ${(props) => props.theme.colors.contentInfo};
    }
  }

  svg {
    fill: #9f9f9f;
  }
`;

export default LayoutWrapper;
