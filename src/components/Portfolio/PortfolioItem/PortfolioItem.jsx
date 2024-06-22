import imagePortfolioManageMobile from "/assets/portfolio/mobile/image-portfolio-manage.jpg";
import imagePortfolioManageTablet from "/assets/portfolio/tablet/image-portfolio-manage.jpg";
import imagePortfolioManageDesktop from "/assets/portfolio/desktop/image-portfolio-manage.jpg";
import imagePortfolioBookmarkMobile from "/assets/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import imagePortfolioBookmarkTablet from "/assets/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import imagePortfolioBookmarkDesktop from "/assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import imagePortfolioInsureMobile from "/assets/portfolio/mobile/image-portfolio-insure@2x.jpg";
import imagePortfolioInsureTablet from "/assets/portfolio/tablet/image-portfolio-insure@2x.jpg";
import imagePortfolioInsureDesktop from "/assets/portfolio/desktop/image-portfolio-insure@2x.jpg";
import imagePortfolioFyloMobile from "/assets/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import imagePortfolioFyloTablet from "/assets/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import imagePortfolioFyloDesktop from "/assets/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function PortfolioItem({ item }) {
  const { id, name, description, images, slug } = item;
  const [imagesMap, setImageMap] = useState({});

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setImageMap({
          imagePortfolioManage: imagePortfolioManageTablet,
          imagePortfolioBookmark: imagePortfolioBookmarkTablet,
          imagePortfolioInsure: imagePortfolioInsureTablet,
          imagePortfolioFylo: imagePortfolioFyloTablet,
        });
        // console.log("imageTablet", imagesMap);
      } else if (window.innerWidth < 768) {
        setImageMap({
          imagePortfolioManage: imagePortfolioManageMobile,
          imagePortfolioBookmark: imagePortfolioBookmarkMobile,
          imagePortfolioInsure: imagePortfolioInsureMobile,
          imagePortfolioFylo: imagePortfolioFyloMobile,
        });
        // console.log("imageTablet", imagesMap);
      } else if (window.innerWidth >= 1281) {
        setImageMap({
          imagePortfolioManage: imagePortfolioManageDesktop,
          imagePortfolioBookmark: imagePortfolioBookmarkDesktop,
          imagePortfolioInsure: imagePortfolioInsureDesktop,
          imagePortfolioFylo: imagePortfolioFyloDesktop,
        });
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);
  // console.log('xxx', imagesMap);

  const thumbnailImage = imagesMap[images.thumbnail];

  return (
    <div
      className={`my-20 md:flex ${
        id % 2 === 0 ? "md:flex-row-reverse	" : "md:space-x-10"
      }  `}
    >
      <div className="md:flex-1 md:py-8 md:flex lg:py-0">
        <img
          src={thumbnailImage}
          alt={name}
          className=" w-full min-h-[288px] "
        />
        <hr className=" my-6 md:hidden" />
      </div>
      <div
        className={`md:flex-1 md:flex md:flex-col md:border-y-2  md:py-20  md:my-auto ${
          id % 2 === 0 ? "md:mr-10	" : ""
        } lg:justify-start lg:items-start  lg:py-28`}
      >
        <p className="font-nova font-bold text-h2 leading-h2 tracking-h2 ">
          {name}
        </p>
        <p className="mt-7 font-sans text-[15px] leading-[30px]">
          {description}
        </p>
        <Link to={`/portfolio/${slug}`}>
          {" "}
          <button
            className="mt-8 min-w-[175px] text-[12px] tracking-[2px]  secondaryDefaultButton 
        hover:secondaryHoverButton "
          >
            VIEW PROJECT
          </button>
        </Link>
      </div>
      <hr className=" my-8 md:hidden" />
    </div>
  );
}
