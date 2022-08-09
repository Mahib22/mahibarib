import React from "react";

export default function NavItem({ menu }) {
  return (
    <a
      href="#about"
      className="hover:text-sky-500 hover:underline hover:decoration-sky-500"
    >
      {menu}
    </a>
  );
}
