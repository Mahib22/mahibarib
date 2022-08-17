import React from "react";
import TitleSection from "../section/TitleSection";

export default function Skills({ getSkills }) {
  return (
    <section className="container px-5 py-8 mx-auto">
      <TitleSection title="Languages" />
      <div className="md:w-2/3 mx-auto flex flex-wrap justify-center gap-6 mb-12">
        {getSkills.languages.map((getSkill) => (
          <img
            src={getSkill.link}
            alt={getSkill.title}
            key={getSkill.title}
            className="h-12"
          />
        ))}
      </div>

      <TitleSection title="Frameworks and Libraries" />
      <TitleSection title="Tools" />
    </section>
  );
}
