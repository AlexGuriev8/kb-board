import Container from './styles';
import { ButtonProps } from './types';

const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  asLink,
  className,
}: ButtonProps) => {
  return (
    <Container
      onClick={onClick}
      color={color}
      disabled={disabled}
      asLink={asLink}
      className={className}
    >
      {children}
    </Container>
  );
};

export default Button;
