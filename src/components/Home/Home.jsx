import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import InterestedSection from "./InterestedSection/InterestedSection";

function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <AboutSection />
      <InterestedSection />
    </div>
  );
}

export default Home;
