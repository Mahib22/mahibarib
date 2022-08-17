import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./navitem/NavItem";
import ResponsiveNavItem from "./navitem/ResponsiveNavItem";
import Switcher from "./darkmode/Switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ menus }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <div className="container flex justify-between p-5 mx-auto dark:text-white">
        <Link to="/" className="font-bold text-3xl">
          mahibarib.
        </Link>

        <div className="flex md:gap-6 gap-2">
          <div className="md:flex gap-6 items-center capitalize hidden">
            {menus.map((menu) => (
              <NavItem key={menu} menu={menu} />
            ))}
          </div>

          <Switcher />

          <button
            className="cursor-pointer md:hidden flex items-center"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <FontAwesomeIcon icon={faXmark} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>

      <div
        className={
          "bg-slate-100 dark:bg-slate-800 md:hidden absolute h-screen z-50" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="flex flex-col capitalize text-base dark:text-white w-screen">
          {menus.map((menu) => (
            <ResponsiveNavItem
              key={menu}
              menu={menu}
              setNavbarOpen={setNavbarOpen}
              navbarOpen={navbarOpen}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
