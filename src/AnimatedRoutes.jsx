import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./components/layout/Category";
import CategoryItems from "./components/layout/CategoryItems";
import ItemDetails from "./components/layout/ItemDetails";
import Accessories from "./components/layout/Accessories";
import Guide from "./components/layout/Guide";
import Builder from "./pages/Builder";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="pt-24">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Category />} />
        <Route path="/components/:category" element={<CategoryItems />} />
        <Route
          path="/components/:category/:itemId"
          element={<ItemDetails />}
        />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/guide" element={<Guide />} />

        {/* Temporary pages */}
        <Route path="/builder" element={<Builder />} />
        <Route path="/systems" element={<div className="pt-24 text-center">Systems Page</div>} />
        <Route path="/contact" element={<div className="pt-24 text-center">Contact Page</div>} />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
