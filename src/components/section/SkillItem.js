import React from "react";

export default function SkillItem({ skill }) {
  return (
    <div className="md:w-2/3 mx-auto flex flex-wrap justify-center gap-6 mb-12">
      {skill.map((item) => (
        <img
          src={item.link}
          alt={item.title}
          key={item.title}
          className="h-12"
        />
      ))}
    </div>
  );
}
