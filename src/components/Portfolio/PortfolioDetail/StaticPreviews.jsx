import React, { useEffect, useState } from "react";
import imageBookmarkPreview1Mobile from "/assets/detail/mobile/image-bookmark-preview-1.jpg";
import imageBookmarkPreview1Tablet from "/assets/detail/mobile/image-bookmark-preview-1.jpg";
import imageBookmarkPreview2Mobile from "/assets/detail/mobile/image-bookmark-preview-2.jpg";
import imageBookmarkPreview2Tablet from "/assets/detail/mobile/image-bookmark-preview-2.jpg";
import imageFyloPreview1Mobile from "/assets/detail/mobile/image-fylo-preview-1.jpg";
import imageFyloPreview1Tablet from "/assets/detail/tablet/image-fylo-preview-1.jpg";
import imageFyloPreview2Mobile from "/assets/detail/mobile/image-fylo-preview-2.jpg";
import imageFyloPreview2Tablet from "/assets/detail/tablet/image-fylo-preview-2.jpg";
import imageInsurePreview1Mobile from "/assets/detail/mobile/image-insure-preview-1.jpg";
import imageInsurePreview1Tablet from "/assets/detail/tablet/image-insure-preview-1.jpg";
import imageInsurePreview2Mobile from "/assets/detail/mobile/image-insure-preview-2.jpg";
import imageInsurePreview2Tablet from "/assets/detail/tablet/image-insure-preview-2.jpg";
import imageManagePreview1Mobile from "/assets/detail/mobile/image-manage-preview-1.jpg";
import imageManagePreview1Tablet from "/assets/detail/tablet/image-manage-preview-1.jpg";
import imageManagePreview2Mobile from "/assets/detail/mobile/image-manage-preview-2.jpg";
import imageManagePreview2Tablet from "/assets/detail/tablet/image-manage-preview-2.jpg";

function StaticPreviews({ previewImg }) {
  const [previewImages, setPreviewImages] = useState({});

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setPreviewImages({
          "image-bookmark-preview-1": imageBookmarkPreview1Tablet,
          "image-bookmark-preview-2": imageBookmarkPreview2Tablet,
          "image-fylo-preview-1": imageFyloPreview1Tablet,
          "image-fylo-preview-2": imageFyloPreview2Tablet,
          "image-insure-preview-1": imageInsurePreview1Tablet,
          "image-insure-preview-2": imageInsurePreview2Tablet,
          "image-manage-preview-1": imageManagePreview1Tablet,
          "image-manage-preview-2": imageManagePreview2Tablet,
        });
        // console.log("imageTablet", imagesMap);
      } else if (window.innerWidth < 768) {
        setPreviewImages({
          "image-bookmark-preview-1": imageBookmarkPreview1Mobile,
          "image-bookmark-preview-2": imageBookmarkPreview2Mobile,
          "image-fylo-preview-1": imageFyloPreview1Mobile,
          "image-fylo-preview-2": imageFyloPreview2Mobile,
          "image-insure-preview-1": imageInsurePreview1Mobile,
          "image-insure-preview-2": imageInsurePreview2Mobile,
          "image-manage-preview-1": imageManagePreview1Mobile,
          "image-manage-preview-2": imageManagePreview2Mobile,
        });
        // console.log("imageTablet", imagesMap);
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  console.log();
  return (
    <div className="mt-10 w-full">
      <h1 className="font-nova text-h3 leading-h2 tracking-h3 mb-10">
        Static Previews
      </h1>
      <div className="space-y-8">
        {previewImg.map((img, idx) => (
          <img
            key={idx}
            src={previewImages[img]}
            alt={`preview-${idx}`}
            className="w-full min-h-[197px]"
          />
        ))}{" "}
      </div>
      <hr className="mt-16  w-full" />
    </div>
  );
}

export default StaticPreviews;
