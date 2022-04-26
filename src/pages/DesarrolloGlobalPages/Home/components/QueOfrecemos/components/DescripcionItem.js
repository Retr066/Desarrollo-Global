export const DescripcionItem = ({ Icon, titulo, subTitulo }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <Icon />
      <h5 className="font-semibold text-xl text-primary dark:text-dark">{titulo}</h5>
      <p className="leading-normal text-center dark:text-slate-400">{subTitulo}</p>
    </div>
  );
};
