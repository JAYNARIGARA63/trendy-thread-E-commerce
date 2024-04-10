import React from "react";
import TredingProduct from "./TredingProduct";
import baidu from "/assets/Image/baidu-line.png";
import topsImage from "/assets/Image/np_Portrait of women on a holiday_be9Nqb_free.jpg";
import newArrivalImage from "/assets/Image/np_Woman dressed in dark sweater and looking at camera resting head on hand_0JrAr0_free.jpg";

const SpecialTredingSection = () => {
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
    <div className="w-full h-svh  flex justify-around items-center"
    id="Trending"
    >
      <div className="w-1/5 h-full flex flex-col  items-center ">
        <div className="bg-gray-300 w-full h-11 pl-3 flex items-center mt-1">
          <img src={baidu} alt="" srcset="" />
          Special Offers
        </div>
        <div className="bg-gray-300 w-full h-72 mt-5 flex flex-col items-center border-2 border-gray-400">
          <h3 className="mt-2">Tops</h3>
          <p className="text-gray-600">by trendy</p>
          <img
            className="h-40 w-40 rounded-full mt-3 object-cover"
            src={topsImage}
            alt=""
            srcset=""
          />
          <button className="w-11/12 h-8 bg-white mt-4 hover:bg-black hover:text-white cursor-pointer ">
            Shop Now
          </button>
        </div>
        <div className="bg-gray-300 w-full h-72 mt-5 flex flex-col items-center border-2 border-gray-400">
          <h3 className="mt-2">New Arrival</h3>
          <p className="text-gray-600">introducing the</p>
          <img
            className="h-40 w-40 mt-3 object-cover"
            src={newArrivalImage}
            alt=""
            srcset=""
          />
          <button className="w-11/12 h-8 bg-white mt-4 hover:bg-black hover:text-white cursor-pointerr">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  h-full w-2/3  ">
        <div className="bg-gray-300 w-full h-11 pl-3 flex items-center mt-1">
          <img  src={baidu} alt="" srcset="" />
          Treding Product
        </div>
        <div className="w-full h-4/6 mt-5 grid grid-cols-3 pl-5 gap-y-5">
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
