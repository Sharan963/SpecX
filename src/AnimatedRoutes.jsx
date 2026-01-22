import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./components/layout/Category";
import CategoryItems from "./components/layout/CategoryItems";
import ItemDetails from "./components/layout/ItemDetails";
import Accessories from "./components/layout/Accessories";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Category />} />
        <Route path="/components/:category" element={<CategoryItems />} />
        <Route
          path="/components/:category/:itemId"
          element={<ItemDetails />}
        />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
