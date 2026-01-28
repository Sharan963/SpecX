import React from "react";
import { useNavigate } from "react-router-dom";

const ReadyToBuild = () => {
  const navigate = useNavigate();

  const scrollToComponents = () => {
    const component = document.getElementById("components");
    component?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-100 max-sm:h-auto flex items-center justify-center">
      <div className="w-[92%] h-full flex items-center justify-center flex-col gap-10">
        
        <h1 className="text-7xl max-sm:text-4xl font-heading-alt text-white text-center">
          Ready to Build Your Dream PC?
        </h1>

        <p className="text-white font-heading text-2xl max-sm:text-base text-center">
          Start configuring your custom gaming rig today with our easy-to-use PC
          builder
        </p>

        <div className="flex gap-6 mt-4 max-sm:flex-col max-sm:w-full max-sm:items-center">
          <button
            className="px-8 py-3 bg-cyan-500 text-black font-heading rounded-lg 
                       hover:bg-cyan-400 transition duration-200"
            onClick={() => navigate("/builder")}
          >
            Start Building
          </button>

          <button
            onClick={scrollToComponents}
            className="px-8 py-3 border border-white/40 text-white font-heading rounded-lg 
                       hover:bg-white/10 transition duration-200"
          >
            View Components
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReadyToBuild;
