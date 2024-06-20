import imagePortfolioManage from "/assets/portfolio/mobile/image-portfolio-manage.jpg";
import imagePortfolioBookmark from "/assets/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import imagePortfolioInsure from "/assets/portfolio/mobile/image-portfolio-insure@2x.jpg";
import imagePortfolioFylo from "/assets/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import { Link } from "react-router-dom";

const imagesMap = {
  imagePortfolioManage: imagePortfolioManage,
  imagePortfolioBookmark: imagePortfolioBookmark,
  imagePortfolioInsure: imagePortfolioInsure,
  imagePortfolioFylo: imagePortfolioFylo,
};

export default function PortfolioItem({ item }) {
  const { name, description, images, slug } = item;

  const thumbnailImage = imagesMap[images.thumbnail];



  return (
    <div className="my-20">
      <img src={thumbnailImage} alt={name} className=" w-full min-h-[288px]" />
      <hr className=" my-6" />
      <div className="">
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
        hover:secondaryHoverButton"
          >
            VIEW PROJECT
          </button>
        </Link>
      </div>
      <hr className=" my-8" />
    </div>
  );
}
