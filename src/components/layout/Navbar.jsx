import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Images/Logo.png";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "PC Builder", path: "/builder" },
    { label: "Pre-Build Systems", path: "/systems" },
    { label: "Components", path: "/components" },
    { label: "Build Guide", path: "/guide" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full h-24
                 bg-[#0A0A0F]
                 flex items-center
                 border-b border-cyan-300/30
                 shadow-[0_2px_20px_rgba(0,229,255,0.35)]
                 z-50"
    >
      {/* Logo */}
      <div className="w-[25%] h-full flex items-center justify-center">
        <img src={logo} alt="specX Logo" className="w-64" />
      </div>

      {/* Nav links */}
      <div className="w-[50%] h-full flex items-center justify-evenly">
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative text-white text-[14px] font-heading
                       after:content-[''] after:absolute after:left-0 after:-bottom-1
                       after:h-0.5 after:w-0 after:bg-white
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="w-[25%] h-full flex items-center justify-center">
        <Link
          to="/builder"
          className="inline-flex items-center justify-center
                     px-6 py-3 text-sm font-heading tracking-wide
                     text-white
                     bg-linear-to-r from-indigo-500 to-purple-600
                     rounded-lg
                     shadow-md shadow-indigo-600/30
                     transition-all duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40
                     active:scale-95"
        >
          Start Building
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
