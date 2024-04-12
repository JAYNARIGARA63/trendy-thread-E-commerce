import React from "react";
import FirstSearchPageImage from "/assets/Image/The Little Things - Home Office.png";

const FirstSearch = () => {
  return (
    <div className="w-screen h-screen md:flex md:justify-center md:items-center sm:gap-y-0 ">
      <div className="h-96 w-96 ml-32 ">
        <img
          src={FirstSearchPageImage}
          alt=""
          className="w-100 h-100 rounded-full object-cover"
        />
      </div>
      <div className="w-3/5 h-2/5 flex justify-center">
        <div className="w-auto h-auto">
          <h1 className="mt-3.5 ml-7 text-3xl">
            Discover the latest trends in <br />
            fashion for every occasion
          </h1>
          <p className="mt-3.5 ml-7">Shop by style,brand or items on sale!</p>
          <div className="h-16 flex items-center gap-x-5">
            <input
              className="h-10 w-96 ml-7 pl-5 border border-gray-800 rounded-lg "
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="h-10 w-20  border border-gray-800 rounded-md hover:bg-black hover:text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSearch;
