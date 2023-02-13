import React from "react";
import Heading from "./miniComp/Heading";
import { BiDownload } from "react-icons/bi";

const Resume = () => {
  return (
    <div id="resume" className="bg-about-bg relative px-8 md:px-12 pb-8">
      <Heading back="SUMMARY" front="Resume" />
      <div className="grid md:grid-cols-2 gap-12 text-left">
        <div>
          <h3 className="text-2xl font-medium">My Education</h3>
          <div className="my-4 p-4 bg-[#111418] rounded-md">
            <span className="bg-brand-color px-2 py-1 text-sm rounded-md">
              2017 - 2021
            </span>
            <h4 className="text-2xl font-medium py-4">
              Computer Science & Engineering
            </h4>
            <h5 className="text-brand-color">
              Daffodil International University, Dhaka
            </h5>
            <p className="text-text-color mt-4">
              My time at Daffodil International University was filled with
              meaningful coursework and hands-on learning experiences that
              prepared me for the challenges and opportunities of the
              professional world.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium">My Experience</h3>
          <div className="my-4 p-4 bg-[#111418] rounded-md">
            <span className="bg-brand-color px-2 py-1 text-sm rounded-md">
              Apr 2022 - Jun 2022
            </span>
            <h4 className="text-2xl font-medium py-4">Frontend Developer</h4>
            <h5 className="text-brand-color">Element Zero Labs</h5>
            <p className="text-text-color mt-4">
              I was a part of the Frontend team for the company Element Zero
              Labs in order to build Carbon which is a web3 NFT marketplace
              platform.
            </p>
          </div>
        </div>
      </div>
      <a href="/resume/Hasan_resume.pdf" download>
        <button className="rounded-full flex items-center gap-2 m-auto border-2 border-[#6c757d] text-[#6c757d] mt-6 px-7 py-3 hover:bg-[#6c757d] hover:text-white transition-all">
          <span>Download CV</span>
          <span className="text-xl">
            <BiDownload />
          </span>
        </button>
      </a>
    </div>
  );
};

export default Resume;
