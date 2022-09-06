export const Container = ({ children, style, className = "", classNameContent = "" }) => {
  return (
    <section className={`${classNameContent}`}>
      <div style={style} className={`px-4 py-20 mx-auto max-w-[95%] xl:max-w-7xl ${className}`}>
        {children}
      </div>
    </section>
  );
};
