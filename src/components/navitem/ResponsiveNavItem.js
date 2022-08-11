import React from "react";
import { Link } from "react-router-dom";

export default function ResponsiveNavItem({ menu }) {
  return (
    <div className="hover:bg-sky-500 dark:hover:bg-slate-600 w-screen flex justify-center">
      <Link
        to={menu}
        className="py-2 text-base hover:text-white text-black dark:text-white capitalize"
      >
        {menu}
      </Link>
    </div>
  );
}
