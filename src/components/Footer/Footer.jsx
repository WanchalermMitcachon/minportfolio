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
    text-[#FFFFFF] py-14 mt-4 space-y-7"
    >
      <img src={logoWhite} alt="logoWhite" />
      <Link to="">
        {" "}
        <p>HOME</p>
      </Link>
      <Link to="portfolio">
        {" "}
        <p>PORTFOLIO</p>
      </Link>
      <Link to="contact">
        {" "}
        <p>CONTACT ME</p>
      </Link>
      <div className="flex space-x-4 py-2">
        <img src={githubWhite} alt="" />
        <img src={linkinWhite} alt="" />
        <img src={twitterWhite} alt="" />
      </div>
    </div>
  );
}

export default Footer;
