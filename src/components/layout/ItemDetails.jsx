// pages/ItemDetails.jsx
import { useParams } from "react-router-dom";
import data from "@/data/componentsData.json";

export default function ItemDetails() {
  const { category, itemId } = useParams();

  const item = data[category]?.find((i) => i.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="mt-2">{item.description}</p>

      <h3 className="mt-6 text-xl font-semibold">
        Specifications
      </h3>
      <ul className="mt-2 list-disc ml-6">
        {Object.entries(item.specs).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
