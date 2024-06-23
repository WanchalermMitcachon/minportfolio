import React, { useEffect, useState } from "react";
import heroImgMobile from "/assets/homepage/mobile/image-homepage-hero@2x.jpg";
import heroImgTablet from "/assets/homepage/tablet/image-homepage-hero@2x.jpg";
import heroImgDesktop from "/assets/homepage/desktop/image-homepage-hero@2x.jpg";
import downsArrows from "/assets/icons/down-arrows.svg";
import downsHoverArrows from "/assets/icons/down-hover-arrows.svg";

function HeroSection({goToAbout}) {
  const [heroImg, setHeroImag] = useState(heroImgMobile);

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setHeroImag(heroImgTablet);
    } else if (window.innerWidth < 768) {
      setHeroImag(heroImgMobile);
    } else if (window.innerWidth >= 1281) {
      setHeroImag(heroImgDesktop);
    }
  };

  return (
    <div className="md:relative">
      <img className="w-full md:h-[50%] mb-7" src={heroImg} alt="heroImg" />
      <div
        className="md:absolute md:bg-white  md:pt-20 md:pr-24
      md:w-[550px] md:left-[-1px] md:bottom-0 
      lg:pt-[6%] lg:pr-6 lg:w-[415px] lg:pt-10"
      >
        <p
          className="font-nova font-bold text-h2 leading-h2 tracking-h2
        lg:text-h1 lg:leading-h1 lg:tracking-h1"
        >
          Hey, I’m Alex Spencer and I love building beautiful websites{" "}
        </p>
        <button
          className="primaryDefaultButton hover:primaryHoverButton group my-8
        md:my-0 md:mt-12
        "
        onClick={goToAbout}
        >
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
        </button>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
