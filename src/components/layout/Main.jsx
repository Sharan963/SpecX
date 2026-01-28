import React from "react";
import Hero from "@/assets/Images/game-hero.webp";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id="home" className="text-white w-full flex h-screen">
      <div className="w-full md:w-[50%] h-full box-border px-6 md:p-28 flex flex-col justify-center gap-4 md:gap-6">
        
        <h1 className="text-4xl md:text-7xl font-heading-alt text-[#F8F9FB] leading-tight">
          Performance That Hits Hard !
        </h1>

        <p className="text-base md:text-lg font-heading text-gray-300 max-w-md">
          Affordable gaming machines tuned for speed, stability, and victory.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            to="/builder"
            className="px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-heading rounded-md transition-transform duration-200 hover:scale-105"
          >
            Build Your PC
          </Link>

          <Link
            to="/systems"
            className="px-6 py-3 border border-white text-white font-heading rounded-md transition-transform duration-200 hover:scale-105"
          >
            View Builds
          </Link>
        </div>
      </div>

      <div className="hidden md:flex w-[50%] h-full items-center justify-center">
        <img
          src={Hero}
          alt="Gaming PC"
          className="max-h-[900px] object-contain"
        />
      </div>
    </div>
  );
};

export default Main;
