import React, { useState, useRef, useEffect } from "react";
import hamburgur from "/assets/icons/hamburger.svg";
import logo from "/assets/logo.svg";
import close from "/assets/icons/close.svg";
import NavBox from "./NavBox";
import { NavLink } from "react-router-dom";

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
      <div className="">
        {isOpen ? (
          <img
            src={close}
            alt="close"
            className="w-[24px] h-[24px] cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></img>
        ) : (
          <img
            src={hamburgur}
            alt="hamburgur"
            className="w-[24px] h-[13px] cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></img>
        )}
        <div className="hidden md:flex md:space-x-10 md:text-[12px] md:tracking-[2px] ">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "active-class"
                : "cursor-pointer hover:text-slightDesaturatedCyan"
            }
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="portfolio"
            className={({ isActive }) =>
              isActive
                ? "active-class  "
                : "cursor-pointer hover:text-slightDesaturatedCyan"
            }
          >
            <p>PORTFOLIO</p>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "active-class "
                : "cursor-pointer hover:text-slightDesaturatedCyan"
            }
          >
            <p>CONTACT ME</p>
          </NavLink>
        </div>
      </div>
      <NavBox isOpen={isOpen} setIsOpen={setIsOpen} navBoxRef={navBoxRef} />
    </div>
  );
}

export default Navbar;
