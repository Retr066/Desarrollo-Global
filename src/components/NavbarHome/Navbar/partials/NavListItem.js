import React from "react";
import { NavItem } from "./NavItem";

export const NavListItem = ({ links }) => {
  return (
    <ul className="flex space-x-1 hover:text-gray-500">
      {links.map(({ to, nombre, href }, index) => (
        <NavItem key={index} to={to} nombre={nombre} href={href} />
      ))}
    </ul>
  );
};
