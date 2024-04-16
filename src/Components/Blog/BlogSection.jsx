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
        className="w-full h-auto bg-gray-200 mt-8 flex flex-col items-center py-8"
        id="blog"
      >
        <h1 className="text-3xl mb-8">Read Our Blog</h1>
        <div className="w-full  md:flex  md:justify-center  gap-4 px-4 ">
          {BlogData?.map((item, index) => (
            <div
              key={index}
              className="sm:w-3/4 md:w-96 mb-6 sm:ml-24  "
            >
              <Blogs blog={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
