import { useParams, useNavigate } from "react-router-dom";
import data from "@/data/componentsData.json";

export default function CategoryItems() {
  const { category } = useParams();
  const navigate = useNavigate();

  const items = data[category];

  if (!items) return <p>Category not found</p>;

  return (
    <div className="p-6 text-white mt-10">
      <h1 className="text-3xl mb-6">
        {category.toUpperCase()}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded cursor-pointer hover:shadow-lg"
            onClick={() =>
              navigate(`/components/${category}/${item.id}`)
            }
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
