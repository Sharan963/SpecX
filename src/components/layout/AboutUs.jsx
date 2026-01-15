import React from "react";
import Image from "@/assets/Images/AboutImage.jpg"

const AboutUs = () => {
  return (
    <div className="w-full min-h-125 flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-4 p-20">
        <h2 className="text-7xl font-heading-alt text-[#F8F9FB]">
          Built for Real Gamers
        </h2>

        <p className="text-lg font-heading text-[#F8F9FB]/80 max-w-md">
          Gaming is not just a hobby — it is competition, passion, and escape.
          That is why we focus on creating setups that keep your FPS high, your
          load times low, and your gameplay smooth when it matters most.
          <br />
          <br />
          Whether you play to relax or to dominate, your rig should never hold
          you back.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Image}
          alt="Gaming setup"
          className="w-95 md:w-100 rounded-r-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
