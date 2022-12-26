const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal_content">{children}</div>;
};

ModalContent.displayName = 'ModalContent';
export default ModalContent;
