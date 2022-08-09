import React, { useState } from "react";
import CancelIcon from "./icons/CancelIcon";
import MenuIcon from "./icons/MenuIcon";
import NavItem from "./navbar/NavItem";
import ResponsiveNavItem from "./navbar/ResponsiveNavItem";
import Switcher from "./Switcher";

export default function Navbar({ menus }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <div className="container flex justify-between p-5 mx-auto dark:text-white">
        <a href="#home" className="font-bold text-3xl">
          mahibarib.
        </a>

        <div className="md:hidden flex items-center gap-2">
          <Switcher />
          <button
            className="cursor-pointer"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <CancelIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="md:flex gap-6 items-center font-medium hidden">
          {menus.map((menu) => (
            <NavItem key={menu} menu={menu} />
          ))}
          <Switcher />
        </div>
      </div>

      <div
        className={
          "bg-slate-100 dark:bg-slate-800 md:hidden" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="flex flex-col">
          {menus.map((menu) => (
            <ResponsiveNavItem key={menu} menu={menu} />
          ))}
        </div>
      </div>
    </nav>
  );
}
