import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Nav from "./Components/Nav/Nav.jsx";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import FirstSearch from "./Components/FirstSearchPage/FirstSearch.jsx";
// import CategorySection from "./Components/Categories/CategorySection.jsx";
// import BlogSection from "./Components/Blog/BlogSection.jsx";
// import Contact from "./Components/ContactSection/Contact.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<FirstSearch />} />
//       <Route path="CATEGORIES" element={<CategorySection />} />
//       <Route path="BLOG" element={<BlogSection />} />
//       <Route path="CONTACT" element={<Contact />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

{/* <RouterProvider router={router} /> */}