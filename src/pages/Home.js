import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 items-start">
      <div className="sticky top-0 z-30">
        <Nav />
      </div>
      <div className="lg:col-span-4 text-white text-center">
        <Hero />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
