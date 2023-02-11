import React from "react";
import Heading from "./miniComp/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./miniComp/TestimonialCard";
import { testimonialData } from "../data";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonial" className="relative px-8 md:px-12 pb-10 bg-about-bg">
      <Heading back="TESTIMONIAL" front="Client Speak" />
      <Slider {...settings}>
        <TestimonialCard data={testimonialData[0]} />
        <TestimonialCard data={testimonialData[1]} />
        <TestimonialCard data={testimonialData[2]} />
      </Slider>
    </div>
  );
};

export default Testimonial;
