import React from "react";
import Blogs from "./Blogs";

const BlogSection = () => {
  const BlogData = [
    {
      imageUrl:
        "np_Fashion designer making a drawing in her cloth shop_49W7E0_free.jpg",
      title: "Top 10 Must-Have Accessories for Every Fashionista",
      purpose:
        "Explore the latest trends in accessories and elevate your style game!",
      author: "By Sarah Smith",
    },
    {
      imageUrl: "The Ultimate Guide to Dressing for Every Occasion.jpg",
      title: "The Ultimate Guide to Dressing for Every Occasion",
      purpose:
        "Unlock insider tips to effortlessly transition from day to night with style.",
      author: "By John Doe",
    },

    {
      imageUrl: "5 Essential Bags Every Woman Should Own.jpg",
      title: `5 Essential Bags Every Woman Should \n  Own`,
      purpose:
        "Discover the perfect bag for every situation and revolutionize your wardrobe!",
      author: "By Emily Johnson",
    },
  ];

  return (
    <>
      <div
        className="w-full h-auto bg-[#dee2e6] mt-28 flex flex-col items-center"
        id="blog"
      >
        <h1 className="mt-8 text-2xl">Read our blog</h1>
        <div className="w-11/12 h-auto flex justify-evenly mt-11 mb-10 gap-3 ">
          {BlogData?.map((item, index) => (
            <Blogs key={index} blog={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
