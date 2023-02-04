import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";

const IsotopeReact = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <div className="flex justify-center gap-6 font-medium">
        <span className=" cursor-pointer" onClick={handleFilterKeyChange("*")}>
          All
        </span>
        <span
          className=" cursor-pointer"
          onClick={handleFilterKeyChange("react")}
        >
          React.js
        </span>
        <span
          className=" cursor-pointer"
          onClick={handleFilterKeyChange("next")}
        >
          Next.js
        </span>
        <span
          className=" cursor-pointer"
          onClick={handleFilterKeyChange("type")}
        >
          TypeScript
        </span>
      </div>
      <div className="filter-container m-auto">
        <div className="filter-item m-4 next type">
          <div className="cursor-pointer rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className=" duration-1000"
              src="/images/portfolio/next-blog-pic.png"
              alt="next-blog"
            />
          </div>
        </div>
        <div className="filter-item m-4 react">
          <div className="cursor-pointer rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className=" hover:-translate-y-44 transition-all duration-1000"
              src="/images/portfolio/e-com-pic.png"
              alt="e-com"
            />
          </div>
        </div>
        <div className="filter-item m-4 react">
          <div className="cursor-pointer rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className=" hover:-translate-y-72 transition-all duration-1000"
              src="/images/portfolio/creative-agency-pic.png"
              alt="e-com"
            />
          </div>
        </div>
        <div className="filter-item m-4 react">
          <div className="cursor-pointer rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className=" hover:-translate-y-72 transition-all duration-1000"
              src="/images/portfolio/doctors-portal-pic.png"
              alt="e-com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IsotopeReact;
