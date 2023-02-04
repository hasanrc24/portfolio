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
      <ul>
        <li onClick={handleFilterKeyChange("*")}>All</li>
        <li onClick={handleFilterKeyChange("react")}>React.js</li>
        <li onClick={handleFilterKeyChange("next")}>Next.js</li>
        <li onClick={handleFilterKeyChange("type")}>TypeScript</li>
      </ul>
      <hr />
      <ul className="filter-container">
        <div className="filter-item react">
          <span>Cucumber</span>
        </div>
        <div className="filter-item next">
          <span>Apple</span>
        </div>
        <div className="filter-item type">
          <span>Orange</span>
        </div>
        <div className="filter-item react next">
          <span>Tomato</span>
        </div>
      </ul>
    </>
  );
};

export default IsotopeReact;
