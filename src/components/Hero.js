import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-bg-image bg-cover bg-no-repeat bg-fixed min-h-screen bg-white/70 h-screen text-white"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h4 className="text-2xl md:text-3xl font-medium">Welcome</h4>
        <TypeAnimation
          sequence={[
            "I'm Md. Hasanuzzaman",
            2000, // Waits 1s
            "I am a Frontend Developer!",
            2000, // Waits 2s
            "React.js, Next.js, TypeScript",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          // style={{ fontSize: "3.5em", fontWeight: "700" }}
          className="my-6 font-bold text-3xl md:text-5xl"
        />
        <h5 className="text-lg md:text-xl font-medium">
          based in Rajshahi, Bangladesh.
        </h5>
        <Link to="contact" spy={true}>
          <button className="mt-6 border-2 font-medium border-brand-color px-7 py-3 rounded-full text-brand-color hover:text-white hover:bg-brand-color transition duration-250 ease-linear">
            Hire Me
          </button>
        </Link>
        <a
          href="#about"
          className=" animate-bounce absolute bottom-5 md:bottom-10 text-2xl"
        >
          <AiOutlineDown className="" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
