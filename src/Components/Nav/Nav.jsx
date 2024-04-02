import React from "react";
import navLogo from "/assets/Image/trendy-threads-high-resolution-logo-black-transparent.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-11/12 h-28 ml-20 flex justify-between items-center">
      <div className="w-1/2 h-20 flex justify-around items-center ">
        <div className="w-52 h-12 ">
          <img src={navLogo} alt="logo" className="w-100 h-100" />
        </div>
        <div>
          <ul className="flex gap-x-7">
            <li>
              <NavLink 
              to="/"
              className={({isActive})=>
              `list-none cursor-pointer
              ${isActive? "text-orange-700 underline" : "text-black"}`
            }
              >HOME</NavLink>
            </li>
            <li className="list-none cursor-pointer">CATEGORIES</li>
            <li className="list-none cursor-pointer">BLOG</li>
            <li className="list-none cursor-pointer">CONTANCT</li>
          </ul>
        </div>
      </div>
      <div className="w-36 flex justify-evenly">
        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
        <i className="fa-solid fa-user cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Nav;
