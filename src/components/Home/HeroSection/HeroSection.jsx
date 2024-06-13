import React from "react";
import heroImg from "/assets/homepage/mobile/image-homepage-hero@2x.jpg";
import downsArrows from "/assets/icons/down-arrows.svg";
import downsHoverArrows from "/assets/icons/down-hover-arrows.svg";
function HeroSection() {
  return (
    <>
      <img className="w-full mb-7" src={heroImg} alt="heroImg" />
      <p className="font-nova font-bold text-h2 leading-h2 tracking-h2">
        Hey, I’m Alex Spencer and I love building beautiful websites{" "}
      </p>
      <button className="primaryDefaultButton hover:primaryHoverButton group my-8">
        <img
          src={downsHoverArrows}
          alt="downsArrow hover:hidden"
          className="group-hover:hidden"
        />
        <img
          src={downsHoverArrows}
          alt="downsWhiteArrows "
          className="hidden group-hover:block"
        />
        <p>ABOUT ME</p>
      </button>
    </>
  );
}

export default HeroSection;
