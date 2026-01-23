import { useEffect } from "react";
import { Link } from "react-router-dom";

import hero from "@/assets/Images/heroimage.webp";
import cpu from "@/assets/Images/cpuimage.jpg";
import gpu from "@/assets/Images/gpuimage.jpg";
import ram from "@/assets/Images/ramimage.jpg";
import storage from "@/assets/Images/storageimage.webp";
import caseImage from "@/assets/Images/caseimage.jpg";

export default function BuildGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 px-6 pb-28 text-white bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-28">
        <div>
          <h1 className="text-6xl font-heading-alt leading-tight mb-6">
            Build Your <span className="text-cyan-400">Ultimate Gaming PC</span>
          </h1>

          <p className="text-gray-400 text-lg font-heading-alt leading-relaxed mb-8">
            A complete step-by-step guide to choosing the right components,
            optimizing performance, and building a powerful gaming machine.
          </p>

          <Link to="/builder">
            <button className="px-10 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
              Start Building →
            </button>
          </Link>
        </div>

        <div className="h-[380px] rounded-2xl overflow-hidden">
          <img
            src={hero}
            alt="Gaming PC"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-28">
        {/* CPU */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="h-[300px] rounded-xl overflow-hidden">
            <img src={cpu} alt="CPU" className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="text-cyan-400 text-sm font-heading">STEP 1</span>
            <h2 className="text-4xl font-heading-alt mt-2 mb-4">
              Choose the Right Processor
            </h2>
            <p className="text-gray-400 font-heading-alt leading-relaxed">
              The CPU controls overall performance. Higher clock speed improves
              gaming.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 font-heading-alt">
              <li>Ryzen 5 / Intel i5</li>
              <li>Ryzen 7 / i7 for streaming</li>
              <li>Higher clocks = better FPS</li>
            </ul>
          </div>
        </div>

        {/* GPU */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-cyan-400 text-sm font-heading">STEP 2</span>
            <h2 className="text-4xl font-heading-alt mt-2 mb-4">
              Select a Powerful GPU
            </h2>
            <p className="text-gray-400 font-heading-alt leading-relaxed">
              The GPU determines visual quality and performance.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 font-heading-alt">
              <li>1080p → RTX 3060</li>
              <li>1440p → RTX 4070+</li>
              <li>4K → RTX 4080 / 4090</li>
            </ul>
          </div>

          <div className="h-[300px] rounded-xl overflow-hidden">
            <img src={gpu} alt="GPU" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RAM */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="h-[300px] rounded-xl overflow-hidden">
            <img src={ram} alt="RAM" className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="text-cyan-400 text-sm font-heading">STEP 3</span>
            <h2 className="text-4xl font-heading-alt mt-2 mb-4">
              Pick High-Speed Memory
            </h2>
            <p className="text-gray-400 font-heading-alt leading-relaxed">
              Faster RAM improves multitasking and stability.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 font-heading-alt">
              <li>Minimum 16GB</li>
              <li>Recommended 32GB</li>
              <li>DDR5 preferred</li>
            </ul>
          </div>
        </div>

        {/* STORAGE */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-cyan-400 text-sm font-heading">STEP 4</span>
            <h2 className="text-4xl font-heading-alt mt-2 mb-4">
              Choose Fast Storage
            </h2>
            <p className="text-gray-400 font-heading-alt leading-relaxed">
              Storage speed affects boot time and load speed.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 font-heading-alt">
              <li>NVMe SSD</li>
              <li>HDD for backup</li>
              <li>1TB minimum</li>
            </ul>
          </div>

          <div className="h-[300px] rounded-xl overflow-hidden">
            <img
              src={storage}
              alt="Storage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* PSU */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="h-[300px] rounded-xl overflow-hidden">
            <img
              src={caseImage}
              alt="PC Case"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-cyan-400 text-sm font-heading">STEP 5</span>
            <h2 className="text-4xl font-heading-alt mt-2 mb-4">
              Power & Cooling
            </h2>
            <p className="text-gray-400 font-heading-alt leading-relaxed">
              Stable power and airflow ensure system longevity.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 font-heading-alt">
              <li>80+ Gold PSU</li>
              <li>Good airflow</li>
              <li>Liquid cooling</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-20">
          <Link to="/builder">
            <button className="px-16 py-5 bg-cyan-500 text-black text-lg font-semibold rounded-xl hover:bg-cyan-400 transition">
              Start Building Your PC
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
