import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Contact from "../ContactSection/Contact";



const Layout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      
        <Nav />
        <Outlet />
        <Contact />
   
    </>
  );
};

export default Layout;
