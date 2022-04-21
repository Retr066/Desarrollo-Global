export const ModalBody = ({ children, className, style }) => {
  return (
    <div style={style} className={`relative p-6 flex-auto ${className}`}>
      {children}
    </div>
  );
};
