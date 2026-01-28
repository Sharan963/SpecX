import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./components/layout/Category";
import CategoryItems from "./components/layout/CategoryItems";
import ItemDetails from "./components/layout/ItemDetails";
import Accessories from "./components/layout/Accessories";
import AccessoriesItems from "./components/layout/AccessoriesItems";
import Gaming from "./components/layout/Gaming";
import GamingItems from "./components/layout/GamingItems";
import Guide from "./components/layout/Guide";
import Builder from "./pages/Builder";
import PreBuild from "./components/layout/PreBuild";
import ViewDetails from "./components/layout/ViewDetails";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="mt-16 md:mt-0">
      <Routes location={location}>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<Category />} />
        <Route path="/components/:category" element={<CategoryItems />} />
        <Route
          path="/components/:category/:itemId"
          element={<ItemDetails />}
        />

        <Route path="/accessories" element={<Accessories />} />
        <Route
          path="/accessories/:category"
          element={<AccessoriesItems />}
        />
        <Route
          path="/accessories/:category/:itemId"
          element={<ItemDetails />}
        />

        <Route path="/gaming" element={<Gaming />} />
        <Route path="/gaming/:category" element={<GamingItems />} />
        <Route
          path="/gaming/:category/:itemId"
          element={<ItemDetails />}
        />
        <Route path="/prebuilt/:id" element={<ViewDetails />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/systems" element={<PreBuild />} />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
