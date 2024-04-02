import React from "react";


const Category = ({ category }) => {
  return (
    <div className="w-28 h-28 flex flex-col justify-center items-center bg-gray-300 hover:bg-black hover:text-white hover:cursor-pointer">
      {category?.name}
      <img
        src={`/assets/Image/${category?.imageUrl}`}
        alt={category?.name}
        className="w-16 h-16 mt-3"
      />
    </div>
  );
};

export default Category;
