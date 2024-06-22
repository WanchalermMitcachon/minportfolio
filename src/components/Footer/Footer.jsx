import React from "react";
import logoWhite from "/assets/logo-white.svg";
import githubWhite from "/assets/icons/whiteGithub.svg";
import linkinWhite from "/assets/icons/whiteLinkedin.svg";
import twitterWhite from "/assets/icons/whiteTwitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="w-screen bg-[#33323D] mx-auto
     "
    >
      <div className="py-14 md:flex md:justify-between md:max-w-[1050px] md:px-8 md:mx-auto  ">
        <div
          className="flex flex-col items-center justify-center 
    text-[#FFFFFF] mb-10 mt-4 space-y-7  md:flex-row md:space-x-8 md:items-center"
        >
          <img src={logoWhite} alt="logoWhite" />
          <Link to="">
            {" "}
            <p className="hover:text-slightDesaturatedCyan">HOME</p>
          </Link>
          <Link to="portfolio">
            {" "}
            <p className="hover:text-slightDesaturatedCyan">PORTFOLIO</p>
          </Link>
          <Link to="contact">
            {" "}
            <p className="hover:text-slightDesaturatedCyan">CONTACT ME</p>
          </Link>
        </div>
        <div className="flex justify-center pb-8  space-x-4 py-2 md:space-x-6 md:items-center md:py-0">
          <img src={githubWhite} alt="" className="cursor-pointer" />
          <img src={linkinWhite} alt="" className="cursor-pointer" />
          <img src={twitterWhite} alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
