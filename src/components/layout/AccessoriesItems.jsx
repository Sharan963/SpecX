import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "@/data/accessoriesData";

export default function AccessoriesItems() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = data?.[category];

  if (!items || items.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        <p className="text-xl">Category not found</p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 pb-10 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/components/${category}/${item.id}`)
            }
            className="bg-[#0f172a] rounded-xl overflow-hidden
            cursor-pointer transition-all hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="h-48 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="text-2xl mb-1">{item.name}</h3>

              <p className="text-sm text-gray-400 line-clamp-2">
                {item.description}
              </p>

              <p className="mt-3 text-lg font-bold text-emerald-400">
                ₹{item.price.toLocaleString()}
              </p>

              <button className="mt-3 text-cyan-400 hover:text-cyan-300">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
