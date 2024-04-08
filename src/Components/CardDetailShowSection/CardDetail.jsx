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
    <div className="w-full h-screen bg-gray-400">
      <h1>hello how are you {id}</h1>
    </div>
  );
};

export default CardDetail;
