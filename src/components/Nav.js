import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = ({ offset }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  console.log(offset);

  return (
    <nav className="px-6 py-4 bg-nav-color z-30 text-white flex justify-between items-center lg:flex-col flex-row  lg:h-screen lg:py-10">
      <div className="lg:flex lg:flex-col lg:justify-center">
        <div className="h-40 w-40 mx-auto hidden lg:block rounded-full overflow-hidden border-8 border-img-border">
          <img src="/portfolio/images/profile.jpg" alt="avatar" />
        </div>
        <Link
          to="home"
          spy={true}
          activeClass="abc"
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="text-2xl cursor-pointer text-center lg:mt-2 lg:mb-6"
        >
          Md Hasan
        </Link>
      </div>
      <div
        className={`-z-10 transition-all duration-300 absolute lg:static lg:z-10 left-0 py-6 lg:py-0 w-full flex flex-col bg-nav-color justify-center items-center gap-5 lg:mb-8 ${
          toggleOpen ? " top-16" : " -top-96"
        }`}
      >
        <Link
          to="home"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className={`hover:text-brand-color cursor-pointer transition border-b border-transparent lg:border-none ease-linear`}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          About Me
        </Link>
        <Link
          to="services"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          What I Do
        </Link>
        <Link
          to="resume"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          Resume
        </Link>
        <Link
          to="portfolio"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          Portfolio
        </Link>
        <Link
          to="testimonial"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          Testimonial
        </Link>
        <Link
          to="contact"
          spy={true}
          offset={offset}
          onClick={() => setToggleOpen(false)}
          className="hover:text-brand-color cursor-pointer border-b border-transparent transition lg:border-none ease-linear"
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.facebook.com/hasanrc24"
          className="hover:text-[#4267B2] transition  ease-linear"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/md_hasan_"
          className="hover:text-[#1DA1F2] transition  ease-linear"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/hasanrc24/"
          className="hover:text-[#0e76a8] transition  ease-linear"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/hasanrc24"
          className="hover:text-[#373535] transition  ease-linear"
        >
          <FaGithub />
        </a>
        <button
          onClick={() => setToggleOpen(!toggleOpen)}
          className="lg:hidden flex flex-col gap-[5px]"
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
