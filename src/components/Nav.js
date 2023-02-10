import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-nav-color overflow-hidden overflow-y-auto z-10 text-white flex justify-center items-center flex-col h-full py-10">
      <div className="h-44 w-44 rounded-full overflow-hidden border-8 border-img-border">
        <img src="/images/profile.jpg" alt="avatar" />
      </div>
      <h4 className="text-2xl mt-2 mb-6">Md Hasan</h4>
      <div className="flex flex-col justify-center items-center gap-5 mb-8">
        <a
          href="#home"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          About Me
        </a>
        <a
          href="#services"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          What I Do
        </a>
        <a
          href="#resume"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Resume
        </a>
        <a
          href="#portfolio"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Portfolio
        </a>
        <a
          href="#testimonial"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Testimonial
        </a>
        <a
          href="#contact"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          Contact
        </a>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.facebook.com/hasanrc24"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          <FaFacebookF />
        </a>
        <a
          href="/"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/hasanrc24/"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/hasanrc24"
          className="hover:text-brand-color transition duration-250 ease-linear"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
