import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  position: relative;

  .menu {
    position: absolute;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    border-radius: 0.5rem;
    right: 0;
    min-width: 130px;
  }

  .menu > li {
    margin: 0;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 0.5rem 0.5rem;
  }

  .menu > li:hover {
    background-color: ${(props) => props.theme.colors.backgroundColor};
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

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const Dropdown = ({ trigger, menu }: { trigger: any; menu: any[] }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem) => (
            <li key={menuItem} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  setOpen(false);
                  menuItem.props.onClick();
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};

export default Dropdown;
