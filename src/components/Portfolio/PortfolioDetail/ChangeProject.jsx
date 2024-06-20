import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "/assets/icons/arrow-left.svg";
import arrowRight from "/assets/icons/arrow-right.svg";

export default function ChangeProject({ previousProject, nextProject }) {
  return (
    <div
      className=" flex justify-between items-center mb-10 py-6 w-full  
      border-y-[1px] border-y-line relative before:absolute before:h-full 
      before:w-[1px]  before:bg-[#979797]  before:left-1/2"
      style={{ justifyContent: !previousProject ? "end" : "" }}
    >
      {previousProject && (
        <Link
          to={`/portfolio/${previousProject.slug}`}
          className="flex flex-col items-start "
        >
          <img
            src={arrowLeft}
            alt="Arrow left"
            aria-hidden="true"
            className=""
          />
          <div className="text-left mt-4 ml-1">
            <p className="font-heading font-nova text-h3 leading-h3 tracking-h3">
              {previousProject.name}
            </p>
            <p className="opacity-50">Previous Project</p>
          </div>
        </Link>
      )}
      {nextProject && (
        <Link
          to={`/portfolio/${nextProject.slug}`}
          className="flex flex-col items-end gap-4 gap-4 "
        >
          <img
            src={arrowRight}
            alt="Arrow right"
            aria-hidden="true"
            className=""
          />
          <div className="text-right mr-1">
            <p className="font-heading font-nova  text-h3 leading-h3 tracking-h3">
              {nextProject.name}
            </p>
            <p className="opacity-50">Next Project</p>
          </div>
        </Link>
      )}
    </div>
  );
}
