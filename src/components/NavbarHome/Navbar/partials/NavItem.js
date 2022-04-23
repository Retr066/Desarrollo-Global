import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useHoverDirty } from "react-use";
export const NavItem = ({ to, nombre, href, className }) => {
  const element = useRef(null);
  const isHovering = useHoverDirty(element);

  return (
    <li ref={element} className={`text-sm font-semibold px-3 py-2 ${className}`}>
      {href === true ? (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className={`${isHovering && "hover:text-black dark:hover:text-white"} font-bold  text-base`}
        >
          {nombre}
        </a>
      ) : (
        <NavLink className={`${isHovering && "hover:text-black dark:hover:text-white"} font-bold  text-base`} to={to}>
          {nombre}
        </NavLink>
      )}
    </li>
  );
};
