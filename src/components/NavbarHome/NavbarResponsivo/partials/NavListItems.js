import { NavItem } from "./NavItem";

export const NavListItems = ({ links, toggleMenuResponsive }) => {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <NavItem key={index} index={index} toggleMenuResponsive={toggleMenuResponsive} {...link} />
      ))}
    </ul>
  );
};
