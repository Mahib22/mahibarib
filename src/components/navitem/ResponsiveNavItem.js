import React from "react";
import { NavLink } from "react-router-dom";

export default function ResponsiveNavItem({ menu }) {
  let normalStyle =
    "py-2 hover:text-white hover:bg-sky-500 dark:hover:bg-slate-600 flex justify-center";
  let activeStyle =
    "py-2 text-white bg-sky-500 dark:bg-slate-600 flex justify-center";

  return (
    <NavLink
      to={menu}
      className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
    >
      {menu}
    </NavLink>
  );
}
