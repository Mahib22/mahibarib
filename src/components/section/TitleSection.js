import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function TitleSection({ title }) {
  return (
    <div className="text-center text-slate-600 dark:text-slate-500 text-lg md:text-2xl mb-6">
      <RoughNotation
        type="highlight"
        show={true}
        className="text-white dark:text-slate-200 py-2 px-4 uppercase tracking-widest"
      >
        {title}
      </RoughNotation>
    </div>
  );
}
