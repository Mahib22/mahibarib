import React from "react";
import { DownloadIcon, MailIcon } from "../Icon";
import GitHub from "../../images/logo/github.png";
import LinkedIn from "../../images/logo/linkedin.png";
import Medium from "../../images/logo/medium.png";
import DevTo from "../../images/logo/dev.png";

export default function Contact() {
  return (
    <section className="container px-5 py-12 md:py-28 mx-auto">
      <div className="lg:w-2/3 mx-auto text-center">
        <p className="dark:text-slate-300 text-slate-800 text-xl">
          I am currently looking for a freelance or part time job. If you see me
          as a good fit, feel free to contact me. Let's work together!
        </p>

        <div className="lg:inline-flex lg:items-center gap-2 mt-2">
          <a
            href="mailto:mahib.arib@gmail.com"
            className="inline-flex items-center bg-slate-200 dark:bg-slate-600 dark:text-slate-300 text-slate-800 hover:bg-sky-200 dark:hover:bg-sky-700 px-4 py-1 rounded-full mt-2"
          >
            <MailIcon />
            <p className="text-xl font-bold">mahib.arib@gmail.com</p>
          </a>
          <a
            href="#a"
            className="inline-flex items-center bg-slate-200 dark:bg-slate-600 dark:text-slate-300 text-slate-800 hover:bg-sky-200 dark:hover:bg-sky-700 px-4 py-1 rounded-full mt-2"
          >
            <DownloadIcon />
            <p className="text-xl font-bold">Download CV</p>
          </a>
        </div>

        <p className="mt-12 dark:text-slate-300 text-slate-800 text-lg font-bold">
          Follow me on
        </p>

        <div className="flex justify-around mt-2 dark:bg-slate-300 py-2 md:w-1/3 mx-auto rounded-lg">
          <a
            href="https://github.com/Mahib22"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github" className="h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahib-arib"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" className="h-10" />
          </a>
          <a
            href="https://mahib-arib.medium.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={Medium} alt="medium" className="h-10" />
          </a>
          <a
            href="https://dev.to/mahib22"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={DevTo} alt="devto" className="h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
