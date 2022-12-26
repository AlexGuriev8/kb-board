import { FC, TextareaHTMLAttributes } from 'react';
import InputWrapper from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  className?: string;
}

const TextArea: FC<TextareaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <InputWrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-box">
        <textarea
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </InputWrapper>
  );
};

export default TextArea;
