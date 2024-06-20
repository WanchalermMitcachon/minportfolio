import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import imageBookmarkHero from "/assets/detail/mobile/image-bookmark-hero.jpg";
import imageFyloHero from "/assets/detail/mobile/image-fylo-hero.jpg";
import imageInsureHero from "/assets/detail/mobile/image-insure-hero.jpg";
import imageManageHero from "/assets/detail/mobile/image-manage-hero.jpg";
import ProjectBackgroud from "./ProjectBackgroud";
import StaticPreviews from "./StaticPreviews";
import ChangeProject from "./ChangeProject";

const ImagesMap = {
  imageBookmarkHero: imageBookmarkHero,
  imageFyloHero: imageFyloHero,
  imageInsureHero: imageInsureHero,
  imageManageHero: imageManageHero,
};
const PortfolioDetail = () => {
  const { slug } = useParams();

  const currentProjectIndex = data.findIndex((item) => item.slug === slug);
  const currentProject = data[currentProjectIndex];
  const currentImage = ImagesMap[currentProject.images.hero];

  const previousProject = data[currentProjectIndex - 1];
  const nextProject = data[currentProjectIndex + 1];

  if (!currentProject) {
    return <Navigate to="/portfolio" />;
  }

  return (
    <div className="flex flex-col  items-start mt-10">
      <img
        src={currentImage}
        alt="currentImage"
        className="w-full min-h-[140px]"
      />
      <hr className="my-8  w-full" />
      <div>
        <p className="font-nova font-bold text-h2 leading-h2 tracking-h2 ">
          {currentProject.name}
        </p>
        <p className="mt-6 font-sans text-[15px] leading-[30px]">
          {currentProject.description}
        </p>
        <div className="flex space-x-1 mt-6">
          {currentProject.tags.map((item, idx) => (
            <React.Fragment key={idx}>
              <p className="text-slightDesaturatedCyan font-bold text-[13px] leading-body-1">
                {item}
              </p>
              {idx < currentProject.tags.length - 1 && (
                <span className="text-slightDesaturatedCyan font-bold text-[13px] leading-body-1">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex space-x-1">
          {currentProject.languages.map((item, idx) => (
            <React.Fragment key={idx}>
              <p className="text-slightDesaturatedCyan font-bold text-[13px] leading-body-1">
                {item}
              </p>
              {idx < currentProject.tags.length - 1 && (
                <span className="text-slightDesaturatedCyan font-bold text-[13px] leading-body-1">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <button
          className="secondaryDefaultButton min-w-[178px] text-[12px] 
        tracking-[2px] mt-6"
        >
          VISIT WEBSITE
        </button>
      </div>
      <hr className="my-8  w-full" />
      <ProjectBackgroud projectBackground={currentProject.projectBackground} />
      <StaticPreviews previewImg={currentProject.images.preview} />
      <ChangeProject
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default PortfolioDetail;
