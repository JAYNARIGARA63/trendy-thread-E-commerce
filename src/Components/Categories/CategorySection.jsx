import React from "react";
import Category from "./Category";

const CategorySection = () => {
  const categoryData = [
    {
      name: "Casual wear",
      imageUrl: "The Little Things - Home Office.png",
      category: "Casual",
    },
    {
      name: "Elegant dress",
      imageUrl: "Women Power - Sitting In Floor.png",
      category: "Elegant",
    },
    {
      name: "Accessories",
      imageUrl: "Hands - Pinch.png",
      category: "Accessories",
    },
    {
      name: "Shoes",
      imageUrl: "Friendly Ones - Sitting.png",
      category: "Shoes",
    },
    {
      name: "Bags",
      imageUrl: "People of Brooklyn - Sitting on Floor.png",
      category: "Bags",
    },
  ];

  return (
    <div className="w-full h-auto lg:h-52 flex flex-col items-center justify-center px-4 md:px-0 mb-10">
      <h2 className="text-2xl text-center" id="category">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center items-center w-full md:w-3/4 mt-7">
        {categoryData?.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4 flex justify-center"
          >
            {/* Category Component */}
            <Category category={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
