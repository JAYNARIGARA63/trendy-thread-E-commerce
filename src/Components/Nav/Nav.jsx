import React, { useRef } from "react";
import navLogo from "/assets/Image/trendy-threads-high-resolution-logo-black-transparent.png";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';


const Nav = () => {
  const handleScroll = (id) => {
    const targetDiv = document.getElementById(id);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-28  flex justify-between items-center sticky top-0 z-50 bg-white">
      <div className="w-1/2 h-20 flex justify-around items-center ">
        <div className="w-52 h-12 ">
          <img src={navLogo} alt="logo" className="w-100 h-100" />
        </div>
        <div>
          <ul className="flex gap-x-7">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `list-none cursor-pointer text-lg
              ${isActive ? "text-orange-700 underline" : "text-black"}`
                }
              >
                HOME
              </NavLink>
            </li>
            <li
              className="list-none cursor-pointer text-lg"
              onClick={() => handleScroll("category")}
            >
              CATEGORIES
            </li>
            <li
              className="list-none cursor-pointer text-lg"
              onClick={() => handleScroll("Trending")}
            >
              TRENDING
            </li>
            <li
              className="list-none cursor-pointer text-lg"
              onClick={() => handleScroll("blog")}
            >
              BLOG
            </li>
          </ul>
        </div>
      </div>
      <div className="w-36 flex justify-evenly">
        <Search className="cursor-pointer"/>
        <NavLink to="Cart"><ShoppingCart/></NavLink>
        <User className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Nav;
