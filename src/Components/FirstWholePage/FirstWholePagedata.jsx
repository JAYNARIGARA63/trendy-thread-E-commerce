import React from "react";
import FirstSearch from "../FirstSearchPage/FirstSearch";
import CategorySection from "../Categories/CategorySection";
import SpecialTredingSection from "../SpecialOfferSection/SpecialTredingSection";
import BlogSection from "../Blog/BlogSection";

const FirstWholePagedata = ( ) => {
  return (
    <>
      <FirstSearch />
      <CategorySection />
      <SpecialTredingSection />
      <BlogSection />
    </>
  );
};

export default FirstWholePagedata;
