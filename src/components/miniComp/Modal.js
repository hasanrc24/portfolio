import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ setOpenModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-out-bg" />
      <div className="z-50 text-modal-text fixed h-[30rem] w-4/5 rounded-lg top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-modal-color">
        <button
          className="flex ml-auto mt-2 mr-2 text-3xl"
          onClick={() => setOpenModal(false)}
        >
          <IoCloseOutline />
        </button>
        <h2 className="m-auto text-center">Modal</h2>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
