import React from "react";
import { FaPalette, FaReact } from "react-icons/fa";
import Heading from "./miniComp/Heading";
import ServiceDetails from "./miniComp/ServiceDetails";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

const Services = () => {
  let title1 = "Frontend Development";
  let text1 =
    "A highly motivated and Skilled frontend developer specializing in Reactjs, Nextjs. Passionate about delivering user-friendly, accessible, and responsive websites.";
  let icon1 = <FaPalette className="text-brand-color text-3xl" />;

  let title2 = "Web Design";
  let text2 =
    "Experienced web designer with a strong eye for aesthetics and user experience. Proficient in HTML, CSS, Bootstrap, Tailwind CSS.";
  let icon2 = (
    <HiOutlineDesktopComputer className="text-brand-color text-3xl" />
  );

  let title3 = "React.js";
  let text3 =
    "ReactJS specialist with a focus on creating scalable, high-performance web applications. Proficient in React functionalities";
  let icon3 = <FaReact className="text-brand-color text-3xl" />;

  let title4 = "Next.js";
  let text4 =
    "Skilled in creating server-side rendered, optimized, and scalable web applications with NextJS.";
  let icon4 = <TbBrandNextjs className="text-brand-color text-3xl" />;

  let title5 = "TypeScript";
  let text5 =
    "Proficient in using TypeScript to improve the reliability and maintainability of my code.";
  let icon5 = <SiTypescript className="text-brand-color text-3xl" />;
  return (
    <div id="services" className="bg-services-bg relative px-8 md:px-12">
      <Heading back="SERVICES" front="What I Do?" />
      <div className="grid md:grid-cols-2">
        <div className="md:px-8">
          <ServiceDetails title={title1} text={text1} icon={icon1} />
          <ServiceDetails title={title3} text={text3} icon={icon3} />
          <ServiceDetails title={title5} text={text5} icon={icon5} />
        </div>
        <div className="md:px-8">
          <ServiceDetails title={title2} text={text2} icon={icon2} />
          <ServiceDetails title={title4} text={text4} icon={icon4} />
        </div>
      </div>
    </div>
  );
};

export default Services;
