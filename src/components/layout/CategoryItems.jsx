import { useParams, useNavigate } from "react-router-dom";
import data from "@/data/componentsData.js";

export default function CategoryItems() {
  const { category } = useParams();
  const navigate = useNavigate();

  const items = data[category];

  if (!items) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        <p className="text-xl">Category not found</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 uppercase tracking-wide">
        {category}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/components/${category}/${item.id}`)}
            className="group bg-[#0f172a] border border-cyan-500/20 rounded-xl 
                       overflow-hidden cursor-pointer transition-all
                       hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            {/* Image Placeholder */}
            <div
              className="h-48 bg-linear-to-br from-gray-800 to-gray-900 
                flex items-center justify-center p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full max-h-40 object-contain transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {item.name}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-2">
                {item.description}
              </p>

              {/* View Button */}
              <button
                className="mt-4 text-sm font-medium text-cyan-400 
                           hover:text-cyan-300 transition"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
