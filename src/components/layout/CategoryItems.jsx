import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "@/data/componentsData.js";

export default function CategoryItems() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = data?.[category];

  if (!items || items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        <p className="text-xl">Category not found</p>
      </div>
    );
  }

  const { heading, sub, img } = items[0];

  return (
    <div className="pt-24 px-6 pb-10 text-white flex flex-col items-center">
      {/* HERO */}
      <div
        className="relative w-[1500px] h-[600px] rounded-xl flex items-center px-10 mb-16
        bg-cover bg-center border border-emerald-400/40
        shadow-[0_0_18px_rgba(52,211,153,0.45)]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 rounded-xl bg-black/40"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-7xl font-heading-alt text-white mb-4">
            {heading}
          </h1>
          <p className="text-white font-heading text-lg">{sub}</p>
        </div>
      </div>

      <h2 className="text-5xl font-heading-alt mb-8">Categories</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/components/${category}/${item.id}`)
            }
            className="group w-96 bg-[#0f172a] border border-cyan-500/20 rounded-xl 
            overflow-hidden cursor-pointer transition-all
            hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            {/* IMAGE */}
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 
                            flex items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-full max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-2xl font-heading-alt mb-2 group-hover:text-cyan-400">
                {item.name}
              </h3>

              <p className="text-sm font-heading-alt text-gray-400 line-clamp-2">
                {item.description}
              </p>

              {/* PRICE */}
              <p className="mt-3 text-lg font-bold text-emerald-400">
                ₹{item.price?.toLocaleString()}
              </p>

              <button className="mt-3 text-sm text-cyan-400 hover:text-cyan-300">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
