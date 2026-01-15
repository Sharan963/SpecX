import React from "react";

const BrandStats = () => {
  return (
    <div className="w-full h-100 flex items-center justify-center">
      <div className="w-[85%] h-32 flex items-center justify-between bg-[#1C1C24] rounded-2xl px-10">
        <div className="text-center flex flex-col gap-1.5">
          <h3 className="text-5xl font-heading-alt text-[#F8F9FB]">10K+</h3>
          <p className="text-sm text-gray-400 font-heading">Custom Builds</p>
        </div>

        <div className="text-center flex flex-col gap-1.5">
          <h3 className="text-5xl font-heading-alt text-[#F8F9FB]">500+</h3>
          <p className="text-sm text-gray-400 font-heading">Components</p>
        </div>

        <div className="text-center flex flex-col gap-1.5">
          <h3 className="text-5xl font-heading-alt text-[#F8F9FB]">99.9%</h3>
          <p className="text-sm text-gray-400 font-heading">Satisfaction</p>
        </div>

        <div className="text-center flex flex-col gap-1.5">
          <h3 className="text-5xl font-heading-alt text-[#F8F9FB]">24/7</h3>
          <p className="text-sm text-gray-400 font-heading">Support</p>
        </div>
      </div>
    </div>
  );
};

export default BrandStats;
