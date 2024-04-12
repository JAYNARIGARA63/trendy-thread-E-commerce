import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartData from "../../JSON/CartData";
import WearImage from "/assets/Image/Humaaans - 2 Characters.png";

const CategoryAreaSection = () => {
  let { cat_type } = useParams();
  const navigate = useNavigate();
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
      <div className="w-full h-64  flex flex-col items-center justify-center ">
        <img
          src={WearImage}
          alt="Please Reload!!"
          className="w-36 h-36 object-cover border-2 border-gray-400 rounded-lg"
        />
        <h1 className="text-2xl mt-2">{cat_type}</h1>
      </div>
      <div className="w-full h-auto lg:grid lg:grid-cols-4 gap-4 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 ">
        {categoryData?.map((item) => (
          <div
            className="bg-gray-300 m-8 w-80 h-72 border-2 border-gray-400 p-4 rounded-lg shadow-2xl hover:bg-gray-400 transition-colors  ease-in-out cursor-pointer"
            onClick={() => {
              navigate(`${item?.id}`);
            }}
          >
            <img
              className="w-full h-52 object-cover rounded-lg shadow-lg"
              src={`/assets/Image/${item?.image}`}
              alt={item?.name}
            />
            <p className="text-gray-600 ml-2 mt-1 text-sm font-medium">
              {item?.title}
            </p>
            <h4 className="ml-2 text-lg font-semibold">${item?.price}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryAreaSection;
