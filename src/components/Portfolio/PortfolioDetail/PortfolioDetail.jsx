import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import imageBookmarkHeroMobile from "/assets/detail/mobile/image-bookmark-hero.jpg";
import imageBookmarkHeroTablet from "/assets/detail/tablet/image-bookmark-hero.jpg";
import imageFyloHeroMobile from "/assets/detail/mobile/image-fylo-hero.jpg";
import imageFyloHeroTablet from "/assets/detail/tablet/image-fylo-hero.jpg";
import imageInsureHeroMobile from "/assets/detail/mobile/image-insure-hero.jpg";
import imageInsureHeroTablet from "/assets/detail/tablet/image-insure-hero.jpg";
import imageManageHeroMobile from "/assets/detail/mobile/image-manage-hero.jpg";
import imageManageHeroTablet from "/assets/detail/tablet/image-manage-hero.jpg";
import ProjectBackgroud from "./ProjectBackgroud";
import StaticPreviews from "./StaticPreviews";
import ChangeProject from "./ChangeProject";
import InterestedSection from "../../InterestedSection/InterestedSection";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [ImagesMap, setImagesMap] = useState({});
  const currentProjectIndex = data.findIndex((item) => item.slug === slug);
  const currentProject = data[currentProjectIndex];
  const currentImage = ImagesMap[currentProject.images.hero];

  const previousProject = data[currentProjectIndex - 1];
  const nextProject = data[currentProjectIndex + 1];

  if (!currentProject) {
    return <Navigate to="/portfolio" />;
  }

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setImagesMap({
          imageManageHero: imageManageHeroTablet,
          imageBookmarkHero: imageBookmarkHeroTablet,
          imageInsureHero: imageInsureHeroTablet,
          imageFyloHero: imageFyloHeroTablet,
        });
        // console.log("imageTablet", imagesMap);
      } else if (window.innerWidth < 768) {
        setImagesMap({
          imageManageHero: imageManageHeroMobile,
          imageBookmarkHero: imageBookmarkHeroMobile,
          imageInsureHero: imageInsureHeroMobile,
          imageFyloHero: imageFyloHeroMobile,
        });
        // console.log("imageTablet", imagesMap);
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className="flex flex-col  items-start mt-10">
      <img
        src={currentImage}
        alt="currentImage"
        className="w-full min-h-[140px]"
      />
      <hr className="my-8  w-full md:my-12" />
      <div className="md:flex ">
        <div className="md:flex-1">
          <p className="font-nova font-bold text-h2 leading-h2 tracking-h2 ">
            {currentProject.name}
          </p>
          <p className="mt-6 font-sans text-[15px] leading-[30px] md:hidden">
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
        <div className="md:flex-1">
          {" "}
          <p
            className="hidden font-sans text-[15px] leading-[30px] 
           md:flex   "
          >
            {currentProject.description}
          </p>
        </div>
      </div>
      <hr className="my-8  w-full" />
      <ProjectBackgroud projectBackground={currentProject.projectBackground} />
      <StaticPreviews previewImg={currentProject.images.preview} />
      <ChangeProject
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <InterestedSection/>
    </div>
  );
};

export default PortfolioDetail;
