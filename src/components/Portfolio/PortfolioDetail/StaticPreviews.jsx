import React from "react";
import imageBookmarkPreview1 from "/assets/detail/mobile/image-bookmark-preview-1.jpg";
import imageBookmarkPreview2 from "/assets/detail/mobile/image-bookmark-preview-2.jpg";
import imageFyloPreview1 from "/assets/detail/mobile/image-fylo-preview-1.jpg";
import imageFyloPreview2 from "/assets/detail/mobile/image-fylo-preview-2.jpg";
import imageInsurePreview1 from "/assets/detail/mobile/image-insure-preview-1.jpg";
import imageInsurePreview2 from "/assets/detail/mobile/image-insure-preview-2.jpg";
import imageManagePreview1 from "/assets/detail/mobile/image-manage-preview-1.jpg";
import imageManagePreview2 from "/assets/detail/mobile/image-manage-preview-2.jpg";

const previewImages = {
  "image-bookmark-preview-1": imageBookmarkPreview1,
  "image-bookmark-preview-2": imageBookmarkPreview2,
  "image-fylo-preview-1": imageFyloPreview1,
  "image-fylo-preview-2": imageFyloPreview2,
  "image-insure-preview-1": imageInsurePreview1,
  "image-insure-preview-2": imageInsurePreview2,
  "image-manage-preview-1": imageManagePreview1,
  "image-manage-preview-2": imageManagePreview2,
};

function StaticPreviews({ previewImg }) {
  console.log();
  return (
    <div className="mt-8 w-full">
      <h1 className="font-nova text-h3 leading-h2 tracking-h3 mb-8">
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
