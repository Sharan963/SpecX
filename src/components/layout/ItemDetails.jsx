import { useParams, useNavigate } from "react-router-dom";
import data from "@/data/componentsData";

export default function ItemDetails() {
  const { category, itemId } = useParams();
  const navigate = useNavigate();

  const item = data[category]?.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        <p className="text-xl">Item not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-white mt-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-cyan-400 hover:text-cyan-300 transition"
      >
        ← Back to Category
      </button>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* IMAGE SECTION */}
        <div className="bg-[#0f172a] rounded-2xl p-8 flex items-center justify-center shadow-lg">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-80 w-full object-contain transition-transform duration-300 hover:scale-105 rounded-xl"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            {item.name}
          </h1>

          <p className="text-gray-400 leading-relaxed">
            {item.description}
          </p>

          {/* Specs Box */}
          <div className="bg-[#0f172a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(item.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-gray-700 pb-2 text-sm"
                >
                  <span className="text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
              Add to Build
            </button>

            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
