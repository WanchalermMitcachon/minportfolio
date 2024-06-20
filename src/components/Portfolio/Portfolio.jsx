import React from "react";
import data from "../../data.json";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import InterestedSection from "../InterestedSection/InterestedSection";

function Portfolio() {
  return (
    <>
      <section className="mt-10">
        <h1 className="sr-only">My portfolio</h1>

        {data.map((project) => (
          <PortfolioItem key={project.id} item={project} />
        ))}
      </section>
      <InterestedSection/>
    </>
  );
}

export default Portfolio;
