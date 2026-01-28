import React from "react";
import { useNavigate } from "react-router-dom";
import keyboard from "@/assets/Images/keyboard.avif";
import mouse from "@/assets/Images/mouseTwo.jpg";
import mousepad from "@/assets/Images/mousepad.jpg";
import monitor from "@/assets/Images/monitor.jpg";
import headset from "@/assets/Images/headset.webp";
import controller from "@/assets/Images/controller.avif";

const Gaming = () => {
  const GamingGears = [
    {
      id: "keyboard",
      name: "Gaming Keyboard",
      description: "Mechanical or membrane keyboard for gaming.",
      image: keyboard,
      required: true,
    },
    {
      id: "mouse",
      name: "Gaming Mouse",
      description: "High DPI mouse for precise control.",
      image: mouse,
      required: true,
    },
    {
      id: "mousepad",
      name: "Mouse Pad",
      description: "Smooth surface for better mouse tracking.",
      image: mousepad,
      required: false,
    },
    {
      id: "monitor",
      name: "Gaming Monitor",
      description: "High refresh rate display for smooth visuals.",
      image: monitor,
      required: true,
    },
    {
      id: "headset",
      name: "Gaming Headset",
      description: "Audio output and mic for communication.",
      image: headset,
      required: true,
    },
    {
      id: "controller",
      name: "Game Controller",
      description: "Best for racing and sports games.",
      image: controller,
      required: false,
    },
  ];

  const navigate = useNavigate();

  return (
    <div
      className="w-full h-250 text-white p-10 flex flex-col items-center
                 max-sm:h-auto"
    >
      <h1 className="font-heading-alt text-5xl max-sm:text-3xl">
        Gaming Gear
      </h1>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-32 mt-3
                   max-sm:grid-cols-1"
      >
        {GamingGears.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/gaming/${item.id}`)}
            className="w-full cursor-pointer p-4 rounded-lg hover:shadow-md
                       transition flex flex-col gap-2 h-full
                       duration-200 ease-out hover:scale-[1.03]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 max-sm:h-40 rounded-t-lg object-cover"
            />

            <div className="flex flex-col flex-1">
              <h1 className="text-2xl font-heading-alt">
                {item.name}
              </h1>

              <p className="font-heading mt-2 flex-1">
                {item.description}
              </p>

              <span className="inline-block mt-3 text-xs text-green-600 font-heading">
                {item.required ? "Required" : "Recommended"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
