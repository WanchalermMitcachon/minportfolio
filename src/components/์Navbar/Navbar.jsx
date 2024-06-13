import React from "react";
import hamburgur from "/assets/icons/hamburger.svg";
import logo from "/assets/logo.svg";
function Navbar() {
  return (
    <div className="flex justify-between items-center mb-7">
      <img src={logo} alt="logo" className="w-[60.08px] h-[32px]"></img>
      <img src={hamburgur} alt="hamburgur" className="w-[24px] h-[13px]"></img>
    </div>
  );
}

export default Navbar;
