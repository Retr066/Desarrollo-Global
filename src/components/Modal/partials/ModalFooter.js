export const ModalFooter = ({ children, className, style }) => {
  return (
    <div style={style} className={`flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ${className}`}>
      {children}
    </div>
  );
};
