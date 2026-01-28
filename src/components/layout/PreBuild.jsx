import { useNavigate } from "react-router-dom";
import preBuiltData from "@/data/preBuiltSystems.js";

export default function PreBuild() {
  const navigate = useNavigate();

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-heading mb-8">
        Pre-Built Systems
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preBuiltData.map((pc) => (
          <div
            key={pc.id}
            className="bg-[#0e0e13] rounded-xl p-5
                       hover:scale-[1.02] transition duration-200
                       border border-white/5 hover:border-cyan-400/30"
          >
            <img
              src={pc.image}
              alt={pc.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-heading-alt mt-4">
              {pc.name}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              {pc.useCase}
            </p>

            <p className="text-green-400 mt-2 font-semibold text-lg">
              {pc.price}
            </p>

            <ul className="text-sm mt-3 space-y-1 text-gray-300">
              <li><span className="text-white">CPU:</span> {pc.specs.cpu}</li>
              <li><span className="text-white">GPU:</span> {pc.specs.gpu}</li>
              <li><span className="text-white">RAM:</span> {pc.specs.ram}</li>
              <li><span className="text-white">Storage:</span> {pc.specs.storage}</li>
              <li><span className="text-white">PSU:</span> {pc.specs.psu}</li>
            </ul>

            <button
              onClick={() => navigate(`/prebuilt/${pc.id}`)}
              className="mt-5 w-full py-2.5 rounded-lg
                         bg-gradient-to-r from-cyan-500 to-blue-600
                         text-white font-medium
                         hover:from-cyan-400 hover:to-blue-500
                         transition-all duration-200
                         shadow-md hover:shadow-lg"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
