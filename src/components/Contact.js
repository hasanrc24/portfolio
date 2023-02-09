import React from "react";
import Heading from "./miniComp/Heading";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="relative px-12 bg-services-bg pb-8">
      <Heading back="CONTACT" front="Get in Touch" />
      <div className="grid grid-cols-12 text-left">
        <div className="col-span-3">
          <h3 className="text-2xl font-medium mb-4">ADDRESS</h3>
          <p className="text-lg">
            Terokhadia Poschimpara, <br />
            Rajshahi, Bangladesh
          </p>
          <div className="my-4 ">
            <p className="flex items-center gap-2 mb-2">
              <span className="text-brand-color">
                <BsTelephoneFill />
              </span>
              +8801774097909
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-color">
                <IoMdMail />
              </span>
              hasanrc24@gmail.com
            </p>
          </div>
          <h3 className="text-2xl font-medium mb-4">FOLLOW ME</h3>
          <div className="flex gap-3 text-lg">
            <a
              className="hover:text-[#4267B2] transition-all"
              href="https://www.facebook.com/hasanrc24"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:text-[#0e76a8] transition-all"
              href="https://www.linkedin.com/in/hasanrc24/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:text-[#171515] transition-all"
              href="https://github.com/hasanrc24"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="col-span-9 pl-4">
          <h2 className="text-2xl font-medium">SEND US A NOTE</h2>
          <form className="">
            <div className="grid grid-cols-2 mt-4 gap-4">
              <input
                className="bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="col-span-2 bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                rows="5"
                placeholder="Write your message here..."
                name="textarea"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="mx-auto mt-4 block transition-all duration-200 bg-brand-color hover:bg-[#1fa37c] px-7 cursor-pointer hover:shadow-2xl py-3 rounded-full"
            />
          </form>
        </div>
      </div>
      <div className="text-left mt-6">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/hasanrc24/"
          className="text-brand-color cursor-pointer"
        >
          Hasan
        </a>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
