export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'transparent';
  disabled?: boolean;
  asLink?: boolean;
  className?: string;
};
