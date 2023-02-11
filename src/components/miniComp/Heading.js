import React from "react";

const Heading = ({ back, front }) => {
  return (
    <>
      <h1 className=" text-[4.5rem] md:text-[8rem] font-extrabold text-[#282d31] py-6 ">
        {back}
      </h1>
      <div className="absolute self-center top-14 md:top-24 font-semibold text-3xl left-0 right-0">
        <h4>{front}</h4>
        <span className="w-20 mx-auto border-brand-color mt-2 border-b-4 block"></span>
      </div>
    </>
  );
};

export default Heading;
