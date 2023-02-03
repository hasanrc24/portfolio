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
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  let icon1 = <FaPalette className="text-brand-color text-3xl" />;

  let title2 = "Web Design";
  let text2 =
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  let icon2 = (
    <HiOutlineDesktopComputer className="text-brand-color text-3xl" />
  );

  let title3 = "React.js";
  let text3 =
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  let icon3 = <FaReact className="text-brand-color text-3xl" />;

  let title4 = "Next.js";
  let text4 =
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  let icon4 = <TbBrandNextjs className="text-brand-color text-3xl" />;

  let title5 = "TypeScript";
  let text5 =
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
  let icon5 = <SiTypescript className="text-brand-color text-3xl" />;
  return (
    <div id="services" className="bg-services-bg relative px-12">
      <Heading back="SERVICES" front="What I Do?" />
      <div className="grid grid-cols-2">
        <div className="px-8">
          <ServiceDetails title={title1} text={text1} icon={icon1} />
          <ServiceDetails title={title3} text={text3} icon={icon3} />
          <ServiceDetails title={title5} text={text5} icon={icon5} />
        </div>
        <div className="px-8">
          <ServiceDetails title={title2} text={text2} icon={icon2} />
          <ServiceDetails title={title4} text={text4} icon={icon4} />
        </div>
      </div>
    </div>
  );
};

export default Services;
