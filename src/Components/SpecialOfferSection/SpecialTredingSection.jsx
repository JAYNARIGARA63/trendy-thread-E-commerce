import React from "react";
import TredingProduct from "./TredingProduct";
import baidu from "/assets/Image/baidu-line.png";
import topsImage from "/assets/Image/np_Portrait of women on a holiday_be9Nqb_free.jpg";
import newArrivalImage from "/assets/Image/np_Woman dressed in dark sweater and looking at camera resting head on hand_0JrAr0_free.jpg";

const SpecialTredingSection = () => {
  const handleScroll = (id) => {
    const targetDiv = document.getElementById(id);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  const trendingproductData = [
    {
      title: "Stylish floral bllouse",
      imageUrl: "philippe-murray-pietsch-xqp3CVQax-Y-unsplash.jpg",
      price: "$8.87",
    },

    {
      title: "MakeUp combo",
      imageUrl: "joel-muniz-DcxN4xWdEYs-unsplash.jpg",
      price: "$8.87",
    },

    {
      title: "Comfortable snekers",
      imageUrl: "andres-jasso-PqbL_mxmaUE-unsplash.jpg",
      price: "$8.87",
    },

    {
      title: "Discover the latest",
      imageUrl: "brooke-cagle-D1W3rQGaNhI-unsplash.jpg",
      price: "$8.87",
    },

    {
      title: "Upgrade your wardrope",
      imageUrl: "dan-asaki-CqwVcsOZil4-unsplash.jpg",
      price: "$8.87",
    },

    {
      title: "Complate your look",
      imageUrl: "freestocks-_3Q3tsJ01nc-unsplash.jpg",
      price: "$8.87",
    },
  ];
  return (
    <div
      className="w-full md:h-screen sm:h-auto md:flex md:justify-around md:items-center sm:justify-center md:mt-28 "
      id="Trending"
    >
      <div className="md:w-1/5 md:h-full  flex flex-col  items-center  sm:mb-10 mb-10 md:mt-10">
        <div className="bg-gray-300 md:w-full md:h-11 sm:w-3/4 sm:h-11 w-full h-11 pl-3 flex items-center mt-1 rounded-lg border-2 border-gray-400 ">
          <img src={baidu} alt="" srcset="" />
          Special Offers
        </div>
        <div className="bg-gray-300 md:w-full md:h-72 sm:w-1/2 w-3/4 mt-5 flex flex-col items-center border-2 border-gray-400 p-4 rounded-lg shadow-md">
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Tops</h3>
          <p className="text-gray-600 text-sm mt-1">by trendy</p>
          <img
            className="h-40 w-40 rounded-full mt-3 object-cover"
            src={topsImage}
            alt="Tops"
            srcset=""
          />
          <button
            className="w-full h-8 bg-gray-300 border border-black text-black font-semibold rounded-lg mt-4 hover:bg-black hover:text-white  transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => handleScroll("category")}
          >
            Shop Now
          </button>
        </div>

        <div className="bg-gray-300 md:w-full md:h-72 sm:w-1/2 w-3/4 mt-5 flex flex-col items-center border-2 border-gray-400 p-4 rounded-lg shadow-md ">
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            New Arrival
          </h3>
          <p className="text-gray-600 text-sm mt-1">introducing the</p>
          <img
            className="h-32 w-32 mt-3 object-cover rounded-lg"
            src={newArrivalImage}
            alt="New Arrival"
            srcset=""
          />
          <button
            className="w-full h-8 bg-gray-300 border border-black text-black font-semibold rounded-lg mt-4 hover:bg-black hover:text-white  transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => handleScroll("category")}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  md:h-full md:w-2/3   sm:h-full sm:w-2/3 ">
        <div className="bg-gray-300 md:w-full md:h-11 sm:w-3/4 sm:h-11 w-full h-11 pl-3 flex items-center mt-1 rounded-lg border-2 border-gray-400">
          <img src={baidu} alt="" srcset="" />
          Treding Product
        </div>
        <div className="w-full h-4/6 mt-5 grid md:grid-cols-3 sm:grid-cols-2 md:pl-5 md:gap-y-5 sm:pl-10 sm:gap-y-5  gap-y-5">
          {/* ------------------------------------------------- trending product card data----------------------------- */}
          {trendingproductData?.map((item, index) => (
            <TredingProduct key={index} trendingproducts={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialTredingSection;
