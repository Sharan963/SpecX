import React from "react";
import caseFansImg from "@/assets/Images/casefan.avif";
import liquidCoolerImg from "@/assets/Images/liquidcool.jpg";
import rgbKitImg from "@/assets/Images/rgblight.jpg";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
  const accessories = [
    {
      id: "caseFans",
      image: caseFansImg,
      name: "Case Fans",
      description: "Improves airflow inside the cabinet.",
      required: false,
      category: "airflow",
      priceRange: "low",
      compatibility: ["ATX", "mATX", "ITX"],
      popularity: "high",
      badge: "Best Seller",
      powerDraw: 5,
    },
    {
      id: "liquidCooling",
      image: liquidCoolerImg,
      name: "Liquid Cooler",
      description: "Advanced cooling solution for high-end CPUs.",
      required: false,
      category: "cooling",
      priceRange: "high",
      compatibility: ["ATX", "mATX"],
      popularity: "medium",
      badge: "Recommended",
      powerDraw: 15,
    },
    {
      id: "rgbLighting",
      image: rgbKitImg,
      name: "RGB Lighting Kit",
      description: "Adds customizable lighting effects.",
      required: false,
      category: "lighting",
      priceRange: "mid",
      compatibility: ["ATX", "mATX", "ITX"],
      popularity: "high",
      badge: "New",
      powerDraw: 8,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="w-full h-150 box-border mt-10 text-white p-10 flex flex-col items-center">
      <h1 className="font-heading-alt text-5xl mt-16">Accessories</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-32 mt-3">
        {accessories.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/components/${item.id}`)}
            className="w-full cursor-pointer p-4 rounded-lg
                 transition-transform duration-200 ease-out
                 hover:scale-[1.03] hover:shadow-md
                 flex flex-col gap-2 h-full"
          >
            <img
              src={item.image}
              className="w-full h-52 rounded-t-lg object-cover"
              alt={item.name}
            />

            <div className="flex flex-col flex-1">
              <h1 className="text-2xl font-heading-alt">{item.name}</h1>

              <p className="font-heading mt-2 flex-1">{item.description}</p>

              <span className="inline-block mt-3 text-xs text-green-600 font-heading">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
