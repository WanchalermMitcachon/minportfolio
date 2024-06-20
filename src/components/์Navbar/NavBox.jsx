import React from "react";
import { Link } from "react-router-dom";

function NavBox({ isOpen, navBoxRef }) {
  return (
    <div
      ref={navBoxRef}
      className={`absolute right-7 top-24 bg-grayisDarkhBlue 
      text-[12px] text-white flex flex-col items-center justify-center 
      py-10 px-16 space-y-8 tracking-[2px]  transform transition-all ease-linear duration-500 ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-100"
      }`}
    >
      <Link to="">
        <p>Home</p>
      </Link>
      <Link to="portfolio">
        <p>PORTFOLIOxxx</p>
      </Link>
      <Link to="contact">
        <p>CONTACT ME</p>
      </Link>
    </div>
  );
}

export default NavBox;
