import React from "react";
import SkillItem from "../section/SkillItem";
import TitleSection from "../section/TitleSection";

export default function Skills({ getSkills }) {
  return (
    <section className="container px-5 pt-8 mx-auto">
      <TitleSection title="Languages" />
      <SkillItem skill={getSkills.languages} />

      <TitleSection title="Frameworks and Libraries" />
      <SkillItem skill={getSkills.frameworks} />

      <TitleSection title="Tools" />
      <SkillItem skill={getSkills.tools} />
    </section>
  );
}
