import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-bg-image bg-cover bg-no-repeat bg-fixed bg-white/70 h-full text-white"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h4 className=" text-3xl font-medium">Welcome</h4>
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
          style={{ fontSize: "3.5em", fontWeight: "700" }}
          className="my-6"
        />
        <h5 className="text-xl font-medium">based in Rajshahi, Bangladesh.</h5>
        <button className="mt-6 border-2 font-medium border-brand-color px-7 py-3 rounded-full text-brand-color hover:text-white hover:bg-brand-color transition duration-250 ease-linear">
          Hire Me
        </button>
        <AiOutlineDown className="animate-bounce absolute bottom-10 text-2xl" />
      </div>
    </div>
  );
};

export default Hero;
