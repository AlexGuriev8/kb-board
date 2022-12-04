import Option from './option';
import Select from './select';
import { Container } from './styles';

type TOption = {
  value: string;
  label: string;
};
interface CustomSelectProps {
  options: TOption[];
  placeholder?: string;
  selectedValue?: string;
  className?: string;
  label?: string;
}

const CustomSelect = ({
  options,
  placeholder = 'Choose an option',
  selectedValue,
  className,
  label,
}: CustomSelectProps) => {
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
