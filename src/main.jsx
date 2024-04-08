import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import FirstWholePagedata from "./Components/FirstWholePage/FirstWholePagedata";
import Cart from "./Components/CartSection/Cart";
import CategoryAreaSection from "./Components/CategoryAreaSection/CategoryAreaSection";
import CardDetail from "./Components/CardDetailShowSection/CardDetail";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<FirstWholePagedata />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Category/:cat_type" element={<CategoryAreaSection />} />
      <Route path="Category/:cat_type/:id" element={<CardDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
