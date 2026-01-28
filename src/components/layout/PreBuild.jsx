import preBuiltData from "@/data/preBuiltSystems.js";

export default function PreBuild() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-heading mb-8">
        Pre-Built Systems
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preBuiltData.map((pc) => (
          <div
            key={pc.id}
            className="bg-[#0e0e13] rounded-lg p-4 hover:scale-[1.03] transition"
          >
            <img
              src={pc.image}
              alt={pc.name}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-4">
              {pc.name}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              {pc.useCase}
            </p>

            <p className="text-green-400 mt-2 font-semibold">
              {pc.price}
            </p>

            <ul className="text-sm mt-3 space-y-1">
              <li>CPU: {pc.specs.cpu}</li>
              <li>GPU: {pc.specs.gpu}</li>
              <li>RAM: {pc.specs.ram}</li>
              <li>Storage: {pc.specs.storage}</li>
              <li>PSU: {pc.specs.psu}</li>
            </ul>

            <button className="mt-4 w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
