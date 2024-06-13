import React from "react";
import profilePic from "/assets/homepage/mobile/image-homepage-profile@2x.jpg";
function AboutSection() {
  return (
    <div className="mt-24">
      <img src={profilePic} alt="profilePic" className="min-h-[346px]" />
      <hr className="my-8" />
      <div>
        <p className="my-8 font-nova font-bold text-h2 leading-h2 tracking-h2">
          About Me
        </p>
        <p className="font-sans leading-[30px] text-[#33323D]">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <button className="secondaryDefaultButton hover:secondaryHoverButton my-10">
          <p className="text-[12px] tracking-[2px]">GO TO PORTFOLIO</p>
        </button>
      </div>
      <hr  className="my-4 "/>
    </div>
  );
}

export default AboutSection;
