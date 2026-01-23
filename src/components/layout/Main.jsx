import React from "react";
import Hero from "@/assets/Images/game-hero.webp";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="text-white w-full h-screen flex ">
        <div className="w-[50%] h-screen box-border p-28 flex flex-col justify-center gap-6">
          {/* Heading */}
          <h1 className="text-7xl font-heading-alt text-[#F8F9FB] leading-tight">
            Performance That Hits Hard !
          </h1>

          {/* Subheading */}
          <p className="text-lg font-heading text-gray-300 max-w-md">
            Affordable gaming machines tuned for speed, stability, and victory.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Link to="/builder"
              className="px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-heading rounded-md  transition-transform duration-200 ease-out 
                   hover:scale-105 active:scale-95 cursor-pointer"
            >
              Build Your PC
            </Link>

            <button
              className="px-6 py-3 border border-white text-white font-heading rounded-md  transition-transform duration-200 ease-out 
                   hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Builds
            </button>
          </div>
        </div>

        <div className="w-[50%] h-screen box-border flex items-center justify-center">
          <img src={Hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
