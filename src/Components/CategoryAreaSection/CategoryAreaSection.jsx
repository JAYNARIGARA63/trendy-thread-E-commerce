import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartData from "../../JSON/CartData";

const CategoryAreaSection = () => {
  let { cat_type } = useParams();
  let [categoryData, setCategoryData] = useState([]);
  console.log("categoryData :>> ", categoryData);

  useEffect(() => {
    if (cat_type) {
      let filteredCategory = CartData?.filter(
        (item) => item.category === cat_type
      );
      setCategoryData(filteredCategory);
    }
  }, []);

  return (
    <div className="w-full h-auto bg-gray-400 grid grid-cols-3 items-center justify-center">
      {categoryData?.map((item) => (
        <div className="bg-gray-300 w-80 h-72">
          <img
            className="w-full h-48 object-cover"
            src={`/assets/Image/${item?.image}`}
            alt={item?.name}
          />
          <p className="text-gray-600 ml-2 mt-1">{item?.title}</p>
          <h4 className="ml-2 ">{item?.price}</h4>
          <button
            type="button"
            class=" w-11/12 h-8  text-xs text-center text-white bg-[#212121] rounded-md ml-3.5 mt-1 "
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryAreaSection;
