import { FC, InputHTMLAttributes } from 'react';
import InputWrapper from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  withAction?: null | JSX.Element;
}

const Input: FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  className = '',
  withAction = null,
}) => {
  return (
    <InputWrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-box">
        <input
          type="text"
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
        {withAction}
      </div>
    </InputWrapper>
  );
};

export default Input;
