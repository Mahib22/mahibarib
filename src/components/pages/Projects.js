import React from "react";
import "microtip/microtip.css";
import TitleSection from "../section/TitleSection";
import PortfolioItem from "../section/PortfolioItem";

export default function Projects({ portfolios }) {
  return (
    <section className="container px-5 py-8 mx-auto">
      <TitleSection title="Latest Projects" />

      <div className="flex flex-wrap -m-4">
        {portfolios.map((portfolio) => (
          <PortfolioItem key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </section>
  );
}
