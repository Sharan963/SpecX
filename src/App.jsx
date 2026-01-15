import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Category from "./components/layout/Category";
import CategoryItems from "./components/layout/CategoryItems";
import ItemDetails from "./components/layout/ItemDetails";
import Accessories from "./components/layout/Accessories";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Categories list */}
        <Route path="/components" element={<Category />} />

        {/* All items under one category */}
        <Route path="/components/:category" element={<CategoryItems />} />

        {/* Single item details */}
        <Route path="/components/:category/:itemId" element={<ItemDetails />} />

        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </>
  );
};

export default App;
