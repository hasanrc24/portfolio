import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="grid grid-cols-5 items-start">
      <div className="sticky top-0">
        <Nav />
      </div>
      <div className="col-span-4 text-white text-center">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
