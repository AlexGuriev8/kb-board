import { useCallback, useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return {
    isOpen,
    toggle,
  };
}
