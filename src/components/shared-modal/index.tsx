import React from 'react';
import StyledModalContent from './styles';

interface SharedModalContentProps {
  title: string;
  danger?: boolean;
  columns?: React.ReactNode;
  header?: React.ReactNode;
  actions?: React.ReactNode;
}

const SharedModalContent = ({
  title = 'Add New Board',
  danger,
  columns,
  header,
  actions,
}: SharedModalContentProps) => {
  return (
    <StyledModalContent isDanger={danger}>
      <h4>{title}</h4>
      {header && header}
      <div className="columns-wrapper">{columns && columns}</div>
      <div className="actions">{actions && actions}</div>
    </StyledModalContent>
  );
};

export default SharedModalContent;
