import React from "react";

function FormContact() {
  return (
    <div className="pb-20">
      <h1 className="my-7 font-nova font-bold text-h2 leading-h2 tracking-h2">
        Contact Me
      </h1>
      <form action="">
        <div>
          {" "}
          <p className="mb-1 font-bold text-[13px] leading-[30px]">Name</p>
          <input
            type="text"
            className="textFieldNormalState focus:textFieldActiveState"
            placeholder="Insert your name here..."
          />
        </div>
        <div className="mt-4">
          {" "}
          <p className="mb-1 font-bold text-[13px] leading-[30px] ">
            Email Address
          </p>
          <input
            type="text"
            className="textFieldNormalState focus:textFieldActiveState "
            placeholder="email@example.com"
          />
        </div>
        <div className="mt-4">
          {" "}
          <p className="mb-1 font-bold text-[13px] leading-[30px]">Message</p>
          <textarea
            type="text"
            className="textAreaNormalState focus:textAreaActiveState"
            placeholder="How can I help you?"
          />
        </div>
        <button className="bg-darkBlue text-white text-[12px] tracking-[2px] py-3 px-12 mt-5 ">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default FormContact;
