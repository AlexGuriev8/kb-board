import Modal from '@/ui/modal';
import React from 'react';
import StyledModalContent from './styles';

interface SharedModalContentProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  danger?: boolean;
  children: React.ReactNode;
}

const SharedModalContent = ({
  title = 'Add New Board',
  danger,
  children,
  isOpen,
  toggleOpen,
}: SharedModalContentProps) => {
  const { ModalHeader, ModalContent, ModalActions } = React.Children.toArray(
    children
  ).reduce((acc, child: any) => {
    acc[child.type.displayName] = child;

    return acc;
  }, {} as Record<string, React.ReactNode>);
  return (
    <Modal isOpen={isOpen} toggle={toggleOpen}>
      <StyledModalContent isDanger={danger}>
        <h4>{title}</h4>
        {ModalHeader && ModalHeader}
        {ModalContent && ModalContent}
        {ModalActions && ModalActions}
      </StyledModalContent>
    </Modal>
  );
};

export default SharedModalContent;
