import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { modalInfo } from "../../redux/modalSlice";
import { workData } from "../../data";

const IsotopeReact = ({ setOpenModal }) => {
  const dispatch = useDispatch();
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
        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[0]));
          }}
          className="filter-item m-4 next type"
        >
          <div className="cursor-pointer group rounded-lg relative max-h-48 w-72 overflow-hidden">
            <img
              className=" duration-1000"
              src="/images/portfolio/next-blog-pic.png"
              alt="next-blog"
            />
            <div className="absolute flex items-center justify-center flex-col top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gray-800 group-hover:opacity-70">
              <h4 className="text-xl mb-2">Next Blog</h4>
              <p>Next.js TypeScript</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[1]));
          }}
          className="filter-item m-4 react"
        >
          <div className="cursor-pointer group rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className=" group-hover:-translate-y-44 transition-all duration-1000"
              src="/images/portfolio/e-com-pic.png"
              alt="e-com"
            />
            <div className="absolute flex items-center justify-center flex-col top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gray-800 group-hover:opacity-80">
              <h4 className="text-xl mb-2">E-com</h4>
              <p>React.js</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[2]));
          }}
          className="filter-item m-4 react"
        >
          <div className="cursor-pointer group rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className="group-hover:-translate-y-72 transition-all duration-1000"
              src="/images/portfolio/creative-agency-pic.png"
              alt="e-com"
            />
            <div className="absolute flex items-center justify-center flex-col top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gray-800 group-hover:opacity-80">
              <h4 className="text-xl mb-2">Creative Agency</h4>
              <p>React.js</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[3]));
          }}
          className="filter-item m-4 react"
        >
          <div className="cursor-pointer group rounded-lg max-h-48 w-72 overflow-hidden">
            <img
              className="group-hover:-translate-y-72 transition-all duration-1000"
              src="/images/portfolio/doctors-portal-pic.png"
              alt="e-com"
            />
            <div className="absolute flex items-center justify-center flex-col top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gray-800 group-hover:opacity-80">
              <h4 className="text-xl mb-2">Doctors Portal</h4>
              <p>React.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsotopeReact;
