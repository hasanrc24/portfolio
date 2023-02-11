import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Nav = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <nav className="px-6 py-4 bg-nav-color z-30 text-white flex justify-between items-center md:flex-col flex-row  md:h-screen md:py-10">
      <div className="md:flex md:flex-col md:justify-center">
        <div className="h-40 w-40 mx-auto hidden md:block rounded-full overflow-hidden border-8 border-img-border">
          <img src="/images/profile.jpg" alt="avatar" />
        </div>
        <a href="#home" className="text-2xl text-center md:mt-2 md:mb-6">
          Md Hasan
        </a>
      </div>
      {/* <div className="hidden md:flex md:flex-col justify-center items-center gap-5 mb-8"> */}
      <div
        className={`-z-10 transition-all duration-300 absolute md:static md:z-10 left-0 py-6 md:py-0 w-full flex flex-col bg-nav-color justify-center items-center gap-5 md:mb-8 ${
          toggleOpen ? " top-16" : " -top-96"
        }`}
      >
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#home"
          className="hover:text-brand-color transition duration-250 border-b md:border-none ease-linear"
        >
          Home
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#about"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          About Me
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#services"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          What I Do
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#resume"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Resume
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#portfolio"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Portfolio
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#testimonial"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Testimonial
        </a>
        <a
          onClick={() => setToggleOpen(!toggleOpen)}
          href="#contact"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Contact
        </a>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.facebook.com/hasanrc24"
          className="hover:text-[#4267B2] transition duration-250 ease-linear"
        >
          <FaFacebookF />
        </a>
        <a
          href="/"
          className="hover:text-[#1DA1F2] transition duration-250 ease-linear"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/hasanrc24/"
          className="hover:text-[#0e76a8] transition duration-250 ease-linear"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/hasanrc24"
          className="hover:text-[#373535] transition duration-250 ease-linear"
        >
          <FaGithub />
        </a>
        <button
          onClick={() => setToggleOpen(!toggleOpen)}
          className="md:hidden flex flex-col gap-[5px]"
        >
          <span
            className={`h-[3px] w-6 bg-white rounded-full transition-all duration-300 ${
              toggleOpen ? " origin-top-left rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-white rounded-full transition-all duration-300 ${
              toggleOpen ? "w-0 opacity-0" : "opacity-1"
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-white rounded-full transition-all duration-300 ${
              toggleOpen ? "origin-bottom-left -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
