import React from "react";

const TredingProduct = ({ trendingproducts }) => {
  return (
    <div className="bg-gray-300 w-80 h-72 border-2 border-gray-400">
      <img
        className="w-full h-48 object-cover"
        src={`/assets/Image/${trendingproducts?.imageUrl}`}
        alt={trendingproducts?.name}
      />
      <p className="text-gray-600 ml-2 mt-1">{trendingproducts?.title}</p>
      <h4 className="ml-2 ">{trendingproducts?.price}</h4>
      <button
        type="button"
        class=" w-11/12 h-8  text-xs text-center text-white bg-[#212121] rounded-md ml-3.5 mt-1 "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default TredingProduct;
