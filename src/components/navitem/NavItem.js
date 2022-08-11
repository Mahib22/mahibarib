import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ menu }) {
  return (
    <Link
      to={menu}
      className="hover:text-sky-500 hover:underline hover:decoration-sky-500 capitalize"
    >
      {menu}
    </Link>
  );
}
