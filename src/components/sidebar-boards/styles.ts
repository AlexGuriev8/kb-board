import styled from '@emotion/styled';

const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: -webkit-fill-available;
  margin: 0 20px;

  .boards-info {
    font-size: 11px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default SidebarWrapper;
