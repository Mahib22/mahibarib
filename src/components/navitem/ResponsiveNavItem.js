import React from "react";

export default function ResponsiveNavItem({ menu }) {
  return (
    <div className="hover:bg-sky-500 dark:hover:bg-slate-600 w-screen flex justify-center">
      <a
        className="py-2 text-base hover:text-white text-black dark:text-white capitalize"
        href={"#" + menu}
      >
        {menu}
      </a>
    </div>
  );
}
