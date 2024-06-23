import React, { useRef } from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import InterestedSection from "../InterestedSection/InterestedSection";

function Home() {
  const aboutRef = useRef(null);
  function goToAbout() {
    if (!aboutRef) return;
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className=" ">
      <HeroSection goToAbout={goToAbout}/>
      <AboutSection aboutRef={aboutRef} />
      <InterestedSection />
    </div>
  );
}

export default Home;
