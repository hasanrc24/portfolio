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
      <div className="flex justify-center mb-4 font-medium">
        <span
          className="text-brand-color border-b-2 border-brand-color px-4 cursor-pointer"
          onClick={handleFilterKeyChange("*")}
        >
          All
        </span>
        <span
          className=" px-4 cursor-pointer"
          onClick={handleFilterKeyChange("react")}
        >
          React.js
        </span>
        <span
          className=" px-4 cursor-pointer"
          onClick={handleFilterKeyChange("next")}
        >
          Next.js
        </span>
        <span
          className=" px-4 cursor-pointer"
          onClick={handleFilterKeyChange("type")}
        >
          TypeScript
        </span>
      </div>
      <div className="filter-container">
        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[0]));
          }}
          className="filter-item m-3 lg:m-4 w-80 h-48 md:w-[19rem] lg:w-72 md:h-[11rem] overflow-hidden rounded-lg next type"
        >
          <div className="cursor-pointer group">
            <img
              className="h-48 duration-1000"
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
          className="filter-item m-3 lg:m-4 w-80 h-48 md:w-[19rem] lg:w-72 md:h-[11rem] rounded-lg overflow-hidden react"
        >
          <div className="cursor-pointer group">
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
          className="filter-item m-3 lg:m-4 rounded-lg w-80 h-48 md:w-[19rem] lg:w-72 md:h-[11rem] overflow-hidden react"
        >
          <div className="cursor-pointer group ">
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
          className="filter-item m-3 lg:m-4 rounded-lg w-80 h-48 md:w-[19rem] lg:w-72 md:h-[11rem] overflow-hidden react"
        >
          <div className="cursor-pointer group">
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
        <div
          onClick={() => {
            setOpenModal(true);
            dispatch(modalInfo(workData[4]));
          }}
          className="filter-item m-3 lg:m-4 rounded-lg w-80 h-48 md:w-[19rem] lg:w-72 md:h-[11rem] overflow-hidden next"
        >
          <div className="cursor-pointer group">
            <img
              className="group-hover:-translate-y-60 transition-all duration-1000"
              src="/images/portfolio/twee-sketch-pic.png"
              alt="e-com"
            />
            <div className="absolute flex items-center justify-center flex-col top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gray-800 group-hover:opacity-80">
              <h4 className="text-xl mb-2">Twee Sketch</h4>
              <p>Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsotopeReact;
