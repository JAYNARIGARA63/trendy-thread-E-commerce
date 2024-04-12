import React from "react";

const TredingProduct = ({ trendingproducts }) => {
  const handleScroll = (id) => {
    let targetView = document.getElementById(id);
    targetView.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="bg-gray-300 w-80 h-72 border-2 border-gray-400 p-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors  ease-in-out cursor-pointer"
      onClick={() => handleScroll("category")}
    >
      <img
       className="w-full h-52 object-cover rounded-lg shadow-lg"
        src={`/assets/Image/${trendingproducts?.imageUrl}`}
        alt={trendingproducts?.name}
      />
      <p className="text-gray-600 ml-2 mt-1 text-sm font-medium">
        {trendingproducts?.title}
      </p>
      <h4 className="ml-2 text-lg font-semibold">
        {trendingproducts?.price}
      </h4>
    </div>
  );
};

export default TredingProduct;
