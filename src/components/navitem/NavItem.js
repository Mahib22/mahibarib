import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ menu }) {
  let normalStyle =
    "hover:underline hover:underline-offset-4 hover:decoration-sky-500 font-medium";
  let activeStyle = "underline underline-offset-4 decoration-sky-500 font-bold";

  return (
    <NavLink
      to={menu}
      className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
    >
      {menu}
    </NavLink>
  );
}
