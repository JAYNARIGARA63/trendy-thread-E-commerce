import React from "react";
import FirstSearchPageImage from "/assets/Image/The Little Things - Home Office.png";

const FirstSearch = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row md:justify-center md:items-center gap-y-5">
      <div className="md:h-96 md:w-96 flex justify-center">
        <img
          src={FirstSearchPageImage}
          alt=""
          className="h-80 w-80 md:h-full md:w-full rounded-full object-cover"
        />
      </div>
      <div className="w-full md:w-3/5 flex justify-center">
        <div className="w-5/6 md:w-auto">
          <h1 className="mt-3.5 md:mt-0 ml-7 md:ml-0 text-center md:text-left text-3xl">
            Discover the latest trends in <br />
            fashion for every occasion
          </h1>
          <p className="mt-3.5 md:mt-2 ml-7 md:ml-0 text-center md:text-left">
            Shop by style, brand, or items on sale!
          </p>
          <div className="mt-3.5 md:mt-4 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-stretch gap-y-3 md:gap-x-5">
            <input
              className="h-10 w-full md:w-96 pl-5 border border-gray-800 rounded-lg"
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="h-10 w-20 md:w-20 border border-gray-800 rounded-md hover:bg-black hover:text-white text-sm md:text-base">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSearch;
