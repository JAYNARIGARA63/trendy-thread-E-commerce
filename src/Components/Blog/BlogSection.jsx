import React from "react";
import Blogs from "./Blogs";

const BlogSection = () => {
  const BlogData = [
    {
      imageUrl:
        "np_Fashion designer making a drawing in her cloth shop_49W7E0_free.jpg",
      title: ` 5 Tips for a Fashionable \n Wardrobe`,
      purpose: "Discover expert advice on staying stylish",
      author: "By david jordan",
    },
    {
      imageUrl:
        "np_Fashion designer making a drawing in her cloth shop_49W7E0_free.jpg",
      title: ` 5 Tips for a Fashionable 
            Wardrobe`,
      purpose: "Discover expert advice on staying stylish",
      author: "By david jordan",
    },
    {
      imageUrl:
        "np_Fashion designer making a drawing in her cloth shop_49W7E0_free.jpg",
      title: ` 5 Tips for a Fashionable 
            Wardrobe`,
      purpose: "Discover expert advice on staying stylish",
      author: "By david jordan",
    },
  ];
  return (
    <>
      <div
        className="w-full h-auto bg-[#dee2e6] mt-28 flex flex-col items-center"
        id="blog"
      >
        <h1 className="mt-8 text-2xl">Read our blog</h1>
        <div className="w-11/12 h-72 flex justify-evenly mt-11 mb-10">
          {BlogData?.map((item, index) => (
            <Blogs key={index} blog={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
