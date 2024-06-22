import React, { useEffect, useState } from "react";
import profilePicMobile from "/assets/homepage/mobile/image-homepage-profile@2x.jpg";
import profilePicTablet from "/assets/homepage/tablet/image-homepage-profile@2x.jpg";
import profilePicDesktop from "/assets/homepage/desktop/image-homepage-profile@2x.jpg";
function AboutSection() {
  const [heroImg, setHeroImag] = useState(profilePicMobile);

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setHeroImag(profilePicTablet);
    } else if (window.innerWidth < 768) {
      setHeroImag(profilePicMobile);
    } else if (window.innerWidth >= 1281) {
      setHeroImag(profilePicDesktop);
    }
  };

  return (
    <div className="mt-24  md:grid md:grid-cols-[35%_65%] lg:grid-cols-[50%_50%] ">
      <img src={heroImg} alt="profilePic" className=" mx-auto w-full " />
      <hr className="my-8 md:hidden" />
      <div className="md:ml-20  md:relative  md:border-b-2 lg:my-0 lg:px-10">
        <hr className="hidden md:flex" />
        <p className="my-8 font-nova font-bold text-h2 leading-h2 tracking-h2">
          About Me
        </p>
        <p className="font-sans leading-[30px] text-[#33323D] ">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <button className="secondaryDefaultButton hover:secondaryHoverButton my-10 md:my-6">
          <p className="text-[12px] tracking-[2px]">GO TO PORTFOLIO</p>
        </button>
        {/* <hr className="hidden md:flex bg-red-500" /> */}
      </div>
      <hr className="my-4 md:hidden " />
    </div>
  );
}

export default AboutSection;
