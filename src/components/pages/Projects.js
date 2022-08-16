import React from "react";
import microtip from "microtip/microtip.css";
import TitleSection from "../TitleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <section className="container px-5 py-8 mx-auto">
      <TitleSection title="Latest Projects" />

      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="h-48 w-screen object-cover object-center hover:scale-105 transition duration-2000 ease-out"
              src="https://source.unsplash.com/daily"
              alt="blog"
            />

            <div className="p-4">
              <h1 className="text-lg font-bold uppercase text-gray-900 dark:text-slate-200 mb-1">
                The Catalyzer
              </h1>

              <h2 className="text-xs font-medium text-gray-400 mb-3">
                CATEGORY
              </h2>

              <div className="flex justify-between items-center">
                <div>
                  <a
                    href="#a"
                    className="text-indigo-400 hover:text-indigo-500 inline-flex items-center underline"
                  >
                    Open Link
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ml-1"
                    />
                  </a>
                </div>

                <div className="bg-slate-200 dark:bg-slate-500 px-2 rounded-md inline-flex items-center gap-2">
                  <p
                    aria-label="Laravel"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    <FontAwesomeIcon icon={faLaravel} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
