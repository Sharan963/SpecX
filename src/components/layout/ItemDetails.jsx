import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import componentsData from "@/data/componentsData";
import accessoriesData from "@/data/accessoriesData";
import gamingGears from "@/data/gamingGearsData";

export default function ItemDetails() {
  const { category, itemId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Decide data source based on route
  let dataSource;

  if (location.pathname.includes("components")) {
    dataSource = componentsData;
  } else if (location.pathname.includes("accessories")) {
    dataSource = accessoriesData;
  } else if (location.pathname.includes("gaming")) {
    dataSource = gamingGears;
  }

  const item = dataSource?.[category]?.find(
    (i) => i.id === itemId
  );

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        <p className="text-xl">Item not found</p>
      </div>
    );
  }

  const handleAddToBuild = () => {
    const existing = JSON.parse(localStorage.getItem("pc_build")) || [];

    const alreadyAdded = existing.find((i) => i.id === item.id);

    if (!alreadyAdded) {
      localStorage.setItem(
        "pc_build",
        JSON.stringify([...existing, item])
      );
    }

    navigate("/builder");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-white mt-20">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-cyan-400 hover:text-cyan-300"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="bg-[#0f172a] rounded-2xl p-8 flex justify-center items-center shadow-lg">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-80 w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{item.name}</h1>

          <p className="text-gray-400">{item.description}</p>

          {item.price && (
            <p className="text-2xl font-semibold text-emerald-400">
              ₹{item.price.toLocaleString()}
            </p>
          )}

          {/* SPECS */}
          {item.specs && (
            <div className="bg-[#0f172a] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(item.specs).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b border-gray-700 pb-2 text-sm"
                    >
                      <span className="text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAddToBuild}
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400"
            >
              Add to Build
            </button>

            <button
              onClick={() => navigate("/builder")}
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black"
            >
              View Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
