import React, { useState, useRef, useEffect } from "react";
import hamburgur from "/assets/icons/hamburger.svg";
import logo from "/assets/logo.svg";
import close from "/assets/icons/close.svg";
import NavBox from "./NavBox";
function Navbar({ isOpen, setIsOpen }) {
  
  const navBoxRef = useRef(null);
  const handleClickOutside = (event) => {
    if (navBoxRef.current && !navBoxRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div className="flex justify-between items-center mb-7">
      <img src={logo} alt="logo" className="w-[60.08px] h-[32px]"></img>
      {isOpen ? (
        <img
          src={close}
          alt="close"
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        ></img>
      ) : (
        <img
          src={hamburgur}
          alt="hamburgur"
          className="w-[24px] h-[13px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        ></img>
      )}
      <NavBox isOpen={isOpen} setIsOpen={setIsOpen} navBoxRef={navBoxRef} />
    </div>
  );
}

export default Navbar;
