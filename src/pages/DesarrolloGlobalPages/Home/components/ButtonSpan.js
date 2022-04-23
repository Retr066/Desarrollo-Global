export const ButtonSpan = ({ href, nombre, Icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="flex gap-2 p-4 bg-primary text-white rounded-xl font-semibold text-xl hover:bg-primary-light hover:scale-125 shadow-lg shadow-blue-500/50 transition duration-300 ease-in-out">
        <Icon />
        <label className="cursor-pointer">{nombre}</label>
      </span>
    </a>
  );
};
