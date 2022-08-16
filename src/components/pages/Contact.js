import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact({ identity }) {
  return (
    <section className="container px-5 py-12 md:py-32 mx-auto">
      <div className="lg:w-2/3 mx-auto text-center">
        <p className="dark:text-slate-300 text-slate-800 text-xl">
          {identity.contactText}
        </p>

        <div className="lg:inline-flex lg:items-center gap-2 mt-2">
          <a
            href={"mailto:" + identity.socialLink.mail}
            className="inline-flex items-center bg-slate-200 dark:bg-slate-600 dark:text-slate-300 text-slate-800 hover:bg-sky-200 dark:hover:bg-sky-700 px-4 py-1 rounded-full mt-2"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2" />
            <p className="text-xl font-bold">{identity.socialLink.mail}</p>
          </a>
          <a
            href={identity.socialLink.resume}
            className="inline-flex items-center bg-slate-200 dark:bg-slate-600 dark:text-slate-300 text-slate-800 hover:bg-sky-200 dark:hover:bg-sky-700 px-4 py-1 rounded-full mt-2"
          >
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              size="lg"
              className="mr-2"
            />
            <p className="text-xl font-bold">Download CV</p>
          </a>
        </div>

        <p className="mt-12 dark:text-slate-300 text-slate-800 text-lg font-bold">
          Follow me on
        </p>

        <div className="flex justify-around mt-2 mx-auto dark:text-white md:w-1/3">
          <a
            href={identity.socialLink.github}
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-sky-700"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href={identity.socialLink.linkedin}
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-sky-700"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
          </a>
          <a
            href={identity.socialLink.medium}
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-sky-700"
          >
            <FontAwesomeIcon icon={faMedium} size="2xl" />
          </a>
          <a
            href={identity.socialLink.devto}
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-sky-700"
          >
            <FontAwesomeIcon icon={faDev} size="2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
