import React from "react";

export default function PortfolioItem({
  title,
  subTitle,
  img,
  link,
  techStack,
}) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-48 w-screen object-cover object-center hover:scale-105 transition duration-2000 ease-out"
          src={img}
          alt="blog"
        />

        <div className="p-4">
          <h1 className="text-lg font-bold uppercase text-gray-900 dark:text-slate-200 mb-1">
            {title}
          </h1>

          <h2 className="text-xs font-medium text-gray-400 mb-3">{subTitle}</h2>

          <div className="flex justify-between items-center">
            <div>
              {link ? (
                <a
                  href={link}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white bg-indigo-500 px-2 rounded-md inline-flex items-center"
                >
                  Preview
                </a>
              ) : (
                <p></p>
              )}
            </div>

            <div className="inline-flex items-center gap-4">
              {techStack.map((item) => (
                <p
                  aria-label={item}
                  data-microtip-position="top"
                  role="tooltip"
                  key={item}
                >
                  <img
                    src={`images/icon/${item}.svg`}
                    alt={item}
                    className="h-6"
                  />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
