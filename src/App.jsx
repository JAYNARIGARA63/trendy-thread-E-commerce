import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import FirstSearchPage from "./Components/FirstSearchPage/FirstSearch";
import CategorySection from "./Components/Categories/CategorySection";
import SpecialTredingSection from "./Components/SpecialOfferSection/SpecialTredingSection";
import BlogSection from "./Components/Blog/BlogSection";
import Contact from "./Components/ContactSection/Contact";
// import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <FirstSearchPage/>
      <CategorySection/>
      <SpecialTredingSection/>
      <BlogSection/>
      <Contact/>
    </>
  );
}

export default App;
