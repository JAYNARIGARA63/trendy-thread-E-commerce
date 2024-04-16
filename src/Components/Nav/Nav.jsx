import React, { useRef, useState } from "react";
import navLogo from "/assets/Image/trendy-threads-high-resolution-logo-black-transparent.png";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { useSelector } from "react-redux";

const Nav = () => {
  let productDetail = useSelector((state) => state.cart);
  const handleScroll = (id) => {
    const targetDiv = document.getElementById(id);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-28 flex justify-between items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full md:w-1/2 h-20 flex flex-col md:flex-row justify-between items-center md:justify-start">
        <div className="w-52 h-16 ml-5 md:ml-10 sm:ml-5">
          <img src={navLogo} alt="logo" className="w-full h-full" />
        </div>
        <div className="hidden md:flex md:ml-4">
          <ul className="flex flex-row gap-x-7 ml-10">
            <li className="list-none cursor-pointer text-lg md:text-base font-semibold text-black hover:text-orange-700 active:text-orange-800 py-2 px-4">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li
              className="list-none cursor-pointer text-lg md:text-base font-semibold text-black hover:text-orange-700 active:text-orange-800 py-2 px-4"
              onClick={() => handleScroll("category")}
            >
              CATEGORIES
            </li>
            <li
              className="list-none cursor-pointer text-lg md:text-base font-semibold text-black hover:text-orange-700 active:text-orange-800 py-2 px-4"
              onClick={() => handleScroll("Trending")}
            >
              TRENDING
            </li>
            <li
              className="list-none cursor-pointer text-lg md:text-base font-semibold text-black hover:text-orange-700 active:text-orange-800 py-2 px-4"
              onClick={() => handleScroll("blog")}
            >
              BLOG
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-36 h-10 flex justify-evenly items-center">
        <Search className="cursor-pointer" />
        <NavLink to="Cart" className="flex items-center space-x-1 ">
          <i className="fa-solid fa-cart-shopping fa-lg"></i>
          <sup className="text-xs">{productDetail?.length}</sup>
        </NavLink>
        <User className="cursor-pointer" />
        <button onClick={toggleNav} className="md:hidden">
          <i className={`fa-solid fa-${isOpen ? "times" : "bars"} fa-lg`}></i>
        </button>
      </div>
      {/* Menu Expansion Area */}
      <div
        className={`absolute top-full left-0 w-full md:hidden  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-y-2 gap-x-7 bg-gray-100 p-4">
          <li className="list-none cursor-pointer text-lg font-semibold text-gray-700 hover:text-orange-700 active:text-orange-800 py-2 px-4">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li
            className="list-none cursor-pointer text-lg font-semibold text-gray-700 hover:text-orange-700 active:text-orange-800 py-2 px-4"
            onClick={() => handleScroll("category")}
          >
            CATEGORIES
          </li>
          <li
            className="list-none cursor-pointer text-lg font-semibold text-gray-700 hover:text-orange-700 active:text-orange-800 py-2 px-4"
            onClick={() => handleScroll("Trending")}
          >
            TRENDING
          </li>
          <li
            className="list-none cursor-pointer text-lg font-semibold text-gray-700 hover:text-orange-700 active:text-orange-800 py-2 px-4"
            onClick={() => handleScroll("blog")}
          >
            BLOG
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
