import styled from '@emotion/styled';

const SidebarWrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  flex-direction: column;

  .content {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-top: 7px;
    width: -webkit-fill-available;
    font-weight: bold;
    color: #635fc7;

    span {
      margin-left: 10px;
    }

    svg {
      fill: #635fc7;
    }
  }

  .boards-info {
    font-size: 11px;
    color: ${(props) => props.theme.colors.primary};
    padding: 0 15px;
  }

  .active {
    color: #fff;
    background: #635fc7;

    &:hover {
      background: #635fc7;
    }

    svg {
      fill: #fff;
    }
  }
`;

export default SidebarWrapper;
