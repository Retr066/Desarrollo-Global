export const Parrafo = ({ children, className, style, ...props }) => {
  return (
    <p style={style} className={`text-center font-semibold mb-3 ${className}`} {...props}>
      {children}
    </p>
  );
};
