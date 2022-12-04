import React, { JSXElementConstructor, ReactElement, useRef } from 'react';

import useOnClickOutside from '../hooks/useOnClickOutside';
import Container from './styles';

type Trigger = ReactElement<any, string | JSXElementConstructor<any>>;

interface DropdownProps {
  trigger: Trigger;
  menu: Trigger[];
}

const Dropdown = ({ trigger, menu }: DropdownProps) => {
  const [open, setOpen] = React.useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container ref={ref}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem) => (
            <li key={trigger.key} className="menu-item">
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
