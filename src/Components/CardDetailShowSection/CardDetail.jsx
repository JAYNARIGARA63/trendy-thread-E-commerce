import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CartData from "../../JSON/CartData";

const CardDetail = () => {
  let { id } = useParams();

  let [categoryData, setCategoryData] = useState([]);

  console.log("categoryData :>> ", categoryData);

  useEffect(() => {
    if (id) {
      let filteredCategory = CartData?.find((item) => item.id == id);
      setCategoryData(filteredCategory);
    }
  }, []);
  return (
    <div className="w-full h-screen  flex items-center justify-center gap-10">
      <div className="w-1/4 h-3/4 bg-red-300">
        <img
          src={`/assets/Image/${categoryData?.image}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 h-3/5 ">
        <h1 className="text-4xl m-5">{categoryData.title}</h1>
        <hr className="border-gray-400" />
        <p className="ml-5 mt-5 text-green-500">Special offer</p>
        <div className="w-32 h-8  ml-5  flex gap-2 items-center">
          <p className="text-xl">MRP:</p>
          <p className="text-xl">${categoryData?.price}</p>
          <p className="text-sm line-through">$100</p>
          <p className="text-sm text-green-500">-24%off</p>
        </div>
        <p className="ml-5 mt-5 text-lg">size:</p>
        <div className=""></div>

        <button className="w-30 h-20 bg-black text-white">Add to cart</button>
      </div>
    </div>
  );
};

export default CardDetail;
