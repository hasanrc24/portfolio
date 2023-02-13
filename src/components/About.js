import React from "react";
import Heading from "./miniComp/Heading";

const About = () => {
  return (
    <div id="about" className="bg-about-bg relative px-8 md:px-12">
      <Heading back="ABOUT ME" front="Know Me More" />
      <div>
        <div className="grid md:grid-cols-3 text-left">
          <div className="md:col-span-2 text-center">
            <h4 className="text-2xl font-medium">
              I'm <span className="text-brand-color">Md. Hasasnuzzaman,</span> a
              Frontend Developer
            </h4>
            <p className="text-[#6d7072] mt-4 font-medium">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
              <br />
              <br />
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="pl-4 mt-8 md:mt-0">
            <p className="">
              <span className="font-medium pr-2">Name:</span>Md. Hasanuzzaman
            </p>
            <hr className="border-[#393b3b] my-3" />
            <p>
              <span className="font-medium pr-2">Email:</span>
              <span className="text-brand-color">hasanrc24@gmail.com</span>
            </p>
            <hr className="border-[#393b3b] my-3" />
            <p className="">
              <span className="font-medium pr-2">Age:</span>
              26
            </p>
            <hr className="border-[#393b3b] my-3" />
            <p className="">
              <span className="font-medium pr-2">From:</span>
              Rajshahi, Bangladesh
            </p>
            <a href="/resume/Hasan_resume.pdf" download>
              <button className="bg-brand-color my-6 px-6 py-3 rounded-full">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-6 pb-14">
          <div className="border-dotted p-4 md:p-0 border-b border-r md:border-b-0 border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">1+</h2>
            <p className="text-[#ccd0d3]">Years Experience</p>
          </div>
          <div className="border-dotted p-4 md:p-0 border-b md:border-r md:border-b-0 border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">5+</h2>
            <p className="text-[#ccd0d3]">Happy Clients</p>
          </div>
          <div className="border-dotted p-4 md:p-0 border-r border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">20+</h2>
            <p className="text-[#ccd0d3]">Projects Done</p>
          </div>
          <div className=" p-4 md:p-0">
            <h2 className=" text-6xl text-[#909294] mb-2">0</h2>
            <p className="text-[#ccd0d3]">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
