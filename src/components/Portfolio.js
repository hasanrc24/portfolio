import React, { useState } from "react";
import IsotopeReact from "./miniComp/FilterIsotope";
import Heading from "./miniComp/Heading";
import Modal from "./miniComp/Modal";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="px-12 relative bg-services-bg">
      <Heading back="PORTFOLIO" front="My Work" />
      {openModal && (
        <Modal
          closeTimeoutMS={500}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      <IsotopeReact setOpenModal={setOpenModal} />
    </div>
  );
};

export default Portfolio;
