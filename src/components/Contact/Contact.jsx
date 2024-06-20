import React from "react";
import github from "/assets/icons/github.svg";
import linkedin from "/assets/icons/linkedin.svg";
import twitter from "/assets/icons/twitter.svg";
import FormContact from "./FormContact";
function Contact() {
  return (
    <div>
      <hr className="mt-10  w-full " />
      <h1
        className="my-8 font-nova font-bold text-h2 leading-h2 tracking-h2
      "
      >
        Get in Touch
      </h1>
      <p className="text-body-2 leading-body-1">
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <div className="flex space-x-4 py-4">
        <img src={github} alt="github" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <hr className="w-full mt-6" />
      <FormContact />
    </div>
  );
}

export default Contact;
