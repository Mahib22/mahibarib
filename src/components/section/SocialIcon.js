import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({ link, icon }) {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
      className="hover:text-sky-700"
    >
      <FontAwesomeIcon icon={icon} size="2xl" />
    </a>
  );
}
