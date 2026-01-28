import { useParams } from "react-router-dom";
import preBuiltData from "@/data/preBuiltSystems";

const ViewDetails = () => {
  const { id } = useParams();
  const pc = preBuiltData.find((item) => item.id === id);

  if (!pc) {
    return (
      <div className="text-white text-center mt-32">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 flex justify-center text-white">
      <div className="w-full max-w-6xl bg-[#0e0e13] rounded-2xl p-8
                      grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={pc.image}
            alt={pc.name}
            className="w-full max-h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-heading-alt mb-2">
            {pc.name}
          </h1>

          <p className="text-gray-400 mb-4">
            {pc.useCase}
          </p>

          <p className="text-green-400 text-3xl font-semibold mb-6">
            {pc.price}
          </p>

          <div className="grid grid-cols-2 gap-y-3 text-sm mb-8">
            <p><span className="text-white">CPU:</span> {pc.specs.cpu}</p>
            <p><span className="text-white">GPU:</span> {pc.specs.gpu}</p>
            <p><span className="text-white">RAM:</span> {pc.specs.ram}</p>
            <p><span className="text-white">Storage:</span> {pc.specs.storage}</p>
            <p><span className="text-white">PSU:</span> {pc.specs.psu}</p>
          </div>

          {/* Single Button */}
          <button
            className="w-full py-3 rounded-lg bg-gradient-to-r
                       from-cyan-500 to-blue-600
                       text-black font-semibold
                       hover:opacity-90 transition"
          >
            Build With This PC
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
