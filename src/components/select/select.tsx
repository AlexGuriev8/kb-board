/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode, useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { SelectContext } from './selectContext';
import SelectWrapper from './styles';

interface SelectProps {
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  children,
  defaultValue,
  placeholder,
  className,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || 'Choose an option';
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <SelectWrapper ref={selectContainerRef} className={className}>
        <div
          className={showDropdown ? 'selected-text active' : 'selected-text'}
          onClick={showDropdownHandler}
        >
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
        </div>
        <ul
          className={
            showDropdown
              ? 'select-options show-dropdown-options'
              : 'select-options hide-dropdown-options'
          }
        >
          {children}
        </ul>
      </SelectWrapper>
    </SelectContext.Provider>
  );
};

export default Select;
