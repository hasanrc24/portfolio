import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const listenToScroll = () => {
    let heightToHideFrom = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
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
        {isVisible && (
          <span className="fixed cursor-pointer bottom-6 right-6 text-3xl md:text-4xl p-1 rounded-full bg-[rgba(0,0,0,.2)]">
            <Link to="home" spy={true}>
              <MdKeyboardArrowUp className="" />
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
