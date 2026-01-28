import { useNavigate } from "react-router-dom";
import cpu from "@/assets/Images/CPU.webp";
import gpu from "@/assets/Images/gpu.jpg";
import motherboard from "@/assets/Images/motherboard.jpg";
import ram from "@/assets/Images/ram.jpg";
import ssd from "@/assets/Images/ssd.avif";
import psu from "@/assets/Images/psu.webp";
import CpuCase from "@/assets/Images/case.jpg";
import cooler from "@/assets/Images/cooler.jpg";

const coreComponents = [
  {
    id: "cpu",
    image: cpu,
    name: "Processor (CPU)",
    description: "Handles all calculations and game logic.",
    required: true,
  },
  {
    id: "gpu",
    image: gpu,
    name: "Graphics Card (GPU)",
    description: "Renders graphics and determines gaming performance.",
    required: true,
  },
  {
    id: "motherboard",
    image: motherboard,
    name: "Motherboard",
    description: "Connects and controls all components.",
    required: true,
  },
  {
    id: "ram",
    image: ram,
    name: "Memory (RAM)",
    description: "Temporary memory for running games and apps.",
    required: true,
  },
  {
    id: "storage",
    image: ssd,
    name: "Storage (SSD / HDD)",
    description: "Stores OS, games, and files.",
    required: true,
  },
  {
    id: "psu",
    image: psu,
    name: "Power Supply Unit (PSU)",
    description: "Provides stable power to the system.",
    required: true,
  },
  {
    id: "case",
    image: CpuCase,
    name: "PC Case",
    description: "Houses all components and manages airflow.",
    required: true,
  },
  {
    id: "cpuCooler",
    image: cooler,
    name: "CPU Cooler",
    description: "Keeps the processor temperature under control.",
    required: true,
  },
];

export default function Category() {
  const navigate = useNavigate();

  return (
    <div id="components" className="w-full h-screen mt-30 text-white p-10 flex flex-col items-center">
      <h1 className="font-heading-alt text-5xl">Core Components</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        {coreComponents.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/components/${item.id}`)}
            className="w-full cursor-pointer p-4 rounded-lg hover:shadow-md transition
             flex flex-col gap-2 h-full duration-200 ease-out
             hover:scale-[1.03]"
          >
            <img
              src={item.image}
              className="w-full h-52 rounded-t-lg object-cover"
              alt=""
            />
            <div className="flex flex-col flex-1">
              <h1 className="text-2xl font-heading-alt">{item.name}</h1>

              <p className="font-heading mt-2 flex-1">{item.description}</p>

              {item.required ? (
                <span className="inline-block mt-3 text-xs text-green-600 font-heading">
                  Required
                </span>
              ) : (
                <span className="inline-block mt-3 text-xs text-green-600 font-heading">
                  Recommended
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
