import { LinkItem } from "./LinkItem";
export const LinkList = ({ links }) => {
  return (
    <ul className="text-gray-600 dark:text-gray-400 mb-4 break-words">
      {links.map(({ to = "", nombre, href = "" }, index) => (
        <LinkItem key={index} to={to} nombre={nombre} href={href} />
      ))}
    </ul>
  );
};
