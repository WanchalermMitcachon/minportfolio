import React from "react";
import logoWhite from "/assets/logo-white.svg";
import githubWhite from "/assets/icons/whiteGithub.svg";
import linkinWhite from "/assets/icons/whiteLinkedin.svg";
import twitterWhite from "/assets/icons/whiteTwitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="w-screen bg-[#33323D] flex flex-col items-center justify-center 
    text-[#FFFFFF] py-14 mt-4 space-y-7
     md:flex-row md:items-center md:justify-between md:space-x-16 md:px-10 md:space-y-0 lg:px-44"
    >
      <div className="md:flex md:space-x-8 md:items-center">
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
      <div className="flex space-x-4 py-2 md:space-x-6 md:items-center md:py-0">
        <img src={githubWhite} alt="" className="cursor-pointer" />
        <img src={linkinWhite} alt="" className="cursor-pointer" />
        <img src={twitterWhite} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
