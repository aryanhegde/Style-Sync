import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
