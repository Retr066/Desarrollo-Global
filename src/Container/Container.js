export const Container = ({ children, className = "" }) => {
  return <div className={`px-4 pt-20 mx-auto max-w-[95%] xl:max-w-[75%] ${className}`}>{children}</div>;
};
