import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartData from "../../JSON/CartData";
import WearImage from "/assets/Image/Humaaans - 2 Characters.png"

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
    <>
      <div className="w-full h-64  flex flex-col items-center justify-center">
          <img src={WearImage} alt="Please Reload!!"  className="w-36 h-36 object-cover border-2 border-gray-400"/>
          <h1 className="text-2xl mt-4">{cat_type}</h1>
      </div>
      <div className="w-full h-auto  lg:grid lg:grid-cols-4  flex flex-col items-center justify-center sm:grid sm:grid-cols-2 bg-gray-400 ">
        {categoryData?.map((item) => (
          <div className="bg-gray-300 w-80 h-72  m-8 border-2 border-gray-400   ">
            <img
              className="w-full h-48 object-cover"
              src={`/assets/Image/${item?.image}`}
              alt={item?.name}
            />
            <p className="text-gray-600 ml-2 mt-1">{item?.title}</p>
            <h4 className="ml-2 ">${item?.price}</h4>
            <button
              type="button"
              class=" w-11/12 h-8  text-xs text-center text-white bg-[#212121] rounded-md ml-3.5 mt-1 "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryAreaSection;
