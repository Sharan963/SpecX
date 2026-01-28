import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Images/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "PC Builder", path: "/builder" },
    { label: "Pre-Build Systems", path: "/systems" },
    { label: "Build Guide", path: "/guide" },
  ];

  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const scrollToComponents = () => {
    document
      .getElementById("components")
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-[#0A0A0F] border-b border-cyan-300/30 shadow-[0_2px_20px_rgba(0,229,255,0.35)] z-50">
      <div className="w-full h-full flex items-center">
        <div className="w-[25%] flex justify-center">
          <img src={logo} alt="Logo" className="w-64" />
        </div>

        <div className="w-[50%] hidden md:flex justify-evenly">
          <Link
            to="/"
            className="relative text-white text-sm after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
          >
            Home
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-white text-sm after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={scrollToComponents}
            className="relative text-white text-sm after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
          >
            Components
          </button>

          <button
            onClick={scrollToFooter}
            className="relative text-white text-sm after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
          >
            Contact
          </button>
        </div>

        <div className="w-[25%] hidden md:flex justify-center">
          <Link
            to="/builder"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white shadow-lg hover:scale-105 transition"
          >
            Start Building
          </Link>
        </div>

        <div className="md:hidden w-full flex justify-end pr-6">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A0A0F] px-6 pb-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-white">
            Home
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white"
            >
              {item.label}
            </Link>
          ))}

          <button onClick={scrollToComponents} className="text-white text-left">
            Components
          </button>

          <button onClick={scrollToFooter} className="text-white text-left">
            Contact
          </button>

          <Link
            to="/builder"
            onClick={() => setOpen(false)}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-center"
          >
            Start Building
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
