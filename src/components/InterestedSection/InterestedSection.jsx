import React from "react";

function InterestedSection() {
  return (
    <div
      className="flex flex-col items-center mt-10 mb-16 mx-7 md:grid md:grid-cols-[350px_1fr_auto]
     md:mx-0 md:mt-20 md:space-x-16 md:w-full"
    >
      <p
        className="font-nova font-bold text-h2 leading-h2 tracking-h2 text-center mb-12
       md:text-start "
      >
        Interested in doing a project together?
      </p>
      <hr className="hidden md:flex lg:translate-y-[-15px]" />
      <button className="secondaryDefaultButton hover:secondaryHoverButton md:max-w-[162px]">
        <p className="text-[12px] tracking-[2px]">CONTACT ME</p>
      </button>
    </div>
  );
}

export default InterestedSection;
