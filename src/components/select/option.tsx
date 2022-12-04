/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode } from 'react';
import { useSelectContext } from './selectContext';

const Option: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
}> = ({ children, value }) => {
  const { changeSelectedOption, selectedOption } = useSelectContext();

  return (
    <li
      className={`select-option select${
        value === selectedOption ? '-active' : ''
      }`}
      onClick={() => changeSelectedOption(value)}
    >
      {children}
    </li>
  );
};

export default Option;
