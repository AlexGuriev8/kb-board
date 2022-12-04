import Option from './option';
import Select from './select';
import { Container } from './styles';

const CustomSelect = ({
  options,
  placeholder = 'Choose an option',
  selectedValue,
  className,
  label,
}: {
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  selectedValue?: string;
  className?: string;
  label?: string;
}) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <Select
        placeholder={placeholder}
        defaultValue={selectedValue}
        className={className}
      >
        {options.map((option) => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default CustomSelect;
