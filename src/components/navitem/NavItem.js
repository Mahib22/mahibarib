import React from "react";

export default function NavItem({ menu }) {
  return (
    <a
      href={"#" + menu}
      className="hover:text-sky-500 hover:underline hover:decoration-sky-500 capitalize"
    >
      {menu}
    </a>
  );
}
