import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { modalSubscribe } from "../../redux/modalSlice";

const Modal = ({ setOpenModal, openModal }) => {
  const modalData = useSelector(modalSubscribe);
  const { category, title, image, projectInfo, technology, url } =
    modalData.modal;

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return createPortal(
    <>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed top-0 left-0 right-0 bottom-0 bg-modal-out-bg"
      />
      <div
        className={`box-border z-50 text-modal-text fixed h-fit w-4/5 rounded-lg top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-modal-color`}
      >
        <button
          className="flex ml-auto mt-2 mr-2 text-3xl"
          onClick={() => setOpenModal(false)}
        >
          <IoCloseOutline />
        </button>
        <h2 className="m-auto text-center text-white text-3xl">{title}</h2>
        <div className="grid grid-cols-2 p-6 gap-6">
          <div className="overflow-hidden h-72 w-full rounded-lg">
            <img className="" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-lg mb-2 text-white">Project Info:</h3>
            <p className="mb-4">{projectInfo}</p>
            <h3 className="text-xl font-lg mb-2 text-white">
              Project Details:
            </h3>
            <div className="mt-2">
              <h3 className="">
                <span className="font-medium">Category: </span>
                {category}
              </h3>
              <hr className="border-[#656969] my-3" />
              <h3 className="">
                <span className="font-medium">Technology: </span>
                {technology}
              </h3>
              <hr className="border-[#656969] my-3" />
              <h3 className="">
                <span className="font-medium">URL: </span>
                <a className="text-brand-color" href={url}>
                  {url}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
