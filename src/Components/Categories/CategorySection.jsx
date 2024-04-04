import React from "react";
import Category from "./Category";

const CategorySection = () => {
  const categoryData = [
    {
      name: "Casual wear",
      imageUrl: "The Little Things - Home Office.png",
    },
    {
      name: "Elegant dress",
      imageUrl: "Women Power - Sitting In Floor.png",
    },
    {
      name: "Accessories",
      imageUrl: "Hands - Pinch.png",
    },
    {
      name: "Shoes",
      imageUrl: "Friendly Ones - Sitting.png",
    },
    {
      name: "Bags",
      imageUrl: "People of Brooklyn - Sitting on Floor.png",
    },
  ];

  return (
    <div className="w-100 h-52 flex flex-col justify-center items-center ">
      <h2 className="text-2xl" id="category">Categories</h2>
      <div className="flex justify-between w-3/4 mt-7 mb-48 " >
        {categoryData?.map((item, index) => (
          <Category key={index} category={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
