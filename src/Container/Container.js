export const Container = ({ children, className = "" }) => {
  return <section className={`px-4 py-20 mx-auto max-w-[95%] xl:max-w-[75%] ${className}`}>{children}</section>;
};
