import React from "react";
import TitleSection from "../TitleSection";

export default function Skills() {
  return (
    <section className="container px-5 py-8 mx-auto">
      <TitleSection title="Languages" />
      <div className="w-1/3 mx-auto"></div>

      <TitleSection title="Frameworks and Libraries" />
      <TitleSection title="Tools" />
    </section>
  );
}
