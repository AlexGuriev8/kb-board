/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode, useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { SelectContext } from './selectContext';
import SelectWrapper from './styles';

interface SelectProps {
  children: ReactNode | ReactNode[];
  selectedValue?: string;
  placeholder?: string;
  className?: string;
  setSelectedValue?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  children,
  selectedValue,
  placeholder,
  className,
  setSelectedValue,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || 'Choose an option';
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    setSelectedValue?.(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{
        selectedOption: selectedValue ?? '',
        changeSelectedOption: updateSelectedOption,
      }}
    >
      <SelectWrapper ref={selectContainerRef} className={className}>
        <div
          className={showDropdown ? 'selected-text active' : 'selected-text'}
          onClick={showDropdownHandler}
        >
          {selectedValue ?? selectPlaceholder}
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
