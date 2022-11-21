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

    &_hide {
      width: -webkit-fill-available;
      margin: 0 20px;
      padding: 25px 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: 8px;
      }
    }

    &_info {
      padding: 10px 20px;
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
