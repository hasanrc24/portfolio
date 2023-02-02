import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-about-bg relative px-12">
      <h1 className="text-[8rem] font-extrabold text-[#282d31] py-6 ">
        ABOUT ME
      </h1>
      <div className="absolute self-center top-24 font-semibold text-3xl left-0 right-0">
        <h4>Know Me More</h4>
        <span className="w-20 mx-auto border-brand-color mt-2 border-b-4 block"></span>
      </div>
      <div>
        <div className="grid grid-cols-3 text-left">
          <div className="col-span-2">
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
          <div className="pl-4">
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
            <button className="bg-brand-color my-6 px-6 py-3 rounded-full">
              Download CV
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-6 pb-14">
          <div className="border-dotted border-r border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">1+</h2>
            <p className="text-[#ccd0d3]">Years Experience</p>
          </div>
          <div className="border-dotted border-r border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">5+</h2>
            <p className="text-[#ccd0d3]">Happy Clients</p>
          </div>
          <div className="border-dotted border-r border-[#4f5252]">
            <h2 className=" text-6xl text-[#909294] mb-2">25+</h2>
            <p className="text-[#ccd0d3]">Projects Done</p>
          </div>
          <div className="">
            <h2 className=" text-6xl text-[#909294] mb-2">0</h2>
            <p className="text-[#ccd0d3]">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
