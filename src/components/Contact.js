import React, { useRef, useState } from "react";
import Heading from "./miniComp/Heading";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { CgDanger, CgSpinner } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notifyError = () => {
    toast.error("Message was not sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifySuccess = () => {
    // toast("Message sent successfully.");
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_4sxk4mr",
        "template_dbkb696",
        formRef.current,
        "kp3JRNN6-TVEktgmn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          notifySuccess();
          reset({
            user_name: "",
            user_email: "",
            user_message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          notifyError();
        }
      );
  };

  return (
    <div id="contact" className="relative px-8 md:px-12 bg-services-bg pb-8">
      <Heading back="CONTACT" front="Get in Touch" />
      <div className="grid md:grid-cols-12 md:gap-2 text-left">
        <div className="md:col-span-3 order-2 md:order-1 mb-4 text-center md:text-left mx-auto">
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
          <div className="flex justify-center gap-3 text-lg">
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
        <div className="md:col-span-9 order-1 md:order-2 mb-8 md:mb-0 md:pl-12 lg:pl-4">
          <h2 className="text-center md:text-left text-2xl font-medium">
            SEND US A NOTE
          </h2>
          <form
            className=""
            ref={formRef}
            onSubmit={handleSubmit(handleSendEmail)}
          >
            <div className="grid md:grid-cols-2 mt-4 gap-4">
              <input
                className="bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                type="text"
                placeholder="Name"
                name="user_name"
                {...register("user_name", { required: true })}
              />

              <input
                className="bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                type="email"
                placeholder="Email"
                name="user_email"
                {...register("user_email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />

              <textarea
                className="md:col-span-2 bg-[#232a31] transition-all duration-200 p-4 rounded-lg focus-visible:outline-none border-x border-y border-[#232a31] focus:border-[#80bdff] focus:shadow-input-shadow"
                rows="5"
                placeholder="Write your message here..."
                name="user_message"
                {...register("user_message", { required: true })}
              ></textarea>
            </div>
            {errors.user_name && (
              <p className="text-red-600 text-xs flex">
                <CgDanger className="pr-1 text-base" /> Please enter your Name
              </p>
            )}
            {errors.user_email?.type === "required" && (
              <p className="text-red-600 text-xs flex">
                <CgDanger className="pr-1 text-base" /> Please enter your Email
              </p>
            )}
            {errors.user_email?.type === "pattern" && (
              <p className="text-red-600 text-xs flex">
                <CgDanger className="pr-1 text-base" /> Please enter valid Email
              </p>
            )}
            {errors.user_message && (
              <p className="text-red-600 text-xs flex">
                <CgDanger className="pr-1 text-base" /> Message can't be empty.
              </p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="mx-auto disabled:opacity-60 disabled:cursor-not-allowed flex items-center mt-4 transition-all duration-200 bg-brand-color hover:bg-[#1fa37c] px-7 cursor-pointer hover:shadow-2xl py-3 rounded-full"
            >
              {isLoading ? (
                <>
                  <CgSpinner className="animate-spin mr-2 text-2xl" />{" "}
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="text-center md:text-left mt-6">
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
