import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./components/layout/Category";
import CategoryItems from "./components/layout/CategoryItems";
import ItemDetails from "./components/layout/ItemDetails";
import Accessories from "./components/layout/Accessories";
import Guide from "./components/layout/Guide";
import Builder from "./pages/Builder";
import PreBuild from "./components/layout/PreBuild";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="pt-24">
      <Routes location={location}>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<Category />} />

        {/* ONE dynamic route for all categories */}
        <Route
          path="/components/:category"
          element={<CategoryItems />}
        />

        <Route
          path="/components/:category/:itemId"
          element={<ItemDetails />}
        />

        <Route path="/accessories" element={<Accessories />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/systems" element={<PreBuild />} />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
