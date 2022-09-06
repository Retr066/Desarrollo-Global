export const LinkItem = ({ href, to, nombre }) => {
  if (href) {
    return (
      <li className="mb-4">
        <a href={href} target="_blank" rel="noreferrer" className="hover:underline">
          {nombre}
        </a>
      </li>
    );
  }
  return (
    <li className="mb-4">
      <a href={to} className="hover:underline">
        {nombre}
      </a>
    </li>
  );
};
