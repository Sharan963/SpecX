import { useEffect, useState } from "react";

export default function Builder() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pc_build")) || [];
    setItems(saved);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("pc_build", JSON.stringify(updated));
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-white mt-20">

      <h1 className="text-5xl font-heading-alt mb-10">Your PC Build</h1>

      {items.length === 0 ? (
        <p className="text-gray-400">No components added yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT - ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-[#0f172a] p-6 rounded-xl shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain bg-black rounded-lg p-3"
                />

                {/* Details */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>

                  <p className="text-lg text-emerald-400 font-semibold">
                    ₹{item.price?.toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-red-400 hover:text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-[#0f172a] rounded-xl p-6 h-fit sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Build Summary
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-300"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price?.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 my-6"></div>

            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span className="text-emerald-400">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>

            <button className="w-full mt-6 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
              Launch Build
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
