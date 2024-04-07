import React from "react";
import Category from "./Category";

const CategorySection = () => {
  const categoryData = [
    {
      name: "Casual wear",
      imageUrl: "The Little Things - Home Office.png",
      category:"Casual"
    },
    {
      name: "Elegant dress",
      imageUrl: "Women Power - Sitting In Floor.png",
      category:"Elegant"
    },
    {
      name: "Accessories",
      imageUrl: "Hands - Pinch.png",
      category:"Accessories"
    },
    {
      name: "Shoes",
      imageUrl: "Friendly Ones - Sitting.png",
      category:"Shoes"
    },
    {
      name: "Bags",
      imageUrl: "People of Brooklyn - Sitting on Floor.png",
      category:"Bags"
    }
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
