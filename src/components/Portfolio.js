import React from "react";
import IsotopeReact from "./miniComp/FilterIsotope";
import Heading from "./miniComp/Heading";

const Portfolio = () => {
  return (
    <div className="px-12 relative bg-services-bg">
      <Heading back="PORTFOLIO" front="My Work" />
      <IsotopeReact />
    </div>
  );
};

export default Portfolio;
