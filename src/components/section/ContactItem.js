import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactItem({ link, icon, text }) {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
      className="inline-flex items-center bg-slate-200 dark:bg-slate-600 dark:text-slate-300 text-slate-800 hover:bg-sky-200 dark:hover:bg-sky-700 px-4 py-1 rounded-full mt-2"
    >
      <FontAwesomeIcon icon={icon} size="lg" className="mr-2" />
      <p className="text-xl font-bold">{text}</p>
    </a>
  );
}
