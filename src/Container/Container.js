export const Container = ({ children, className = "", classNameContent = "" }) => {
  return (
    <section className={`${classNameContent}`}>
      <div className={`px-4 py-20 mx-auto max-w-[95%] xl:max-w-[80%] ${className}`}>{children}</div>
    </section>
  );
};
