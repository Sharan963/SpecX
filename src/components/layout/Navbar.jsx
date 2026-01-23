import { Link } from "react-router-dom";
import logo from "@/assets/Images/Logo.png";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "PC Builder", path: "/builder" },
    { label: "Pre-Build Systems", path: "/systems" },
    { label: "Components", path: "/components" },
    { label: "Build Guide", path: "/guide" },
  ];

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-[#0A0A0F]
                    flex items-center border-b border-cyan-300/30
                    shadow-[0_2px_20px_rgba(0,229,255,0.35)]
                    z-50">

      <div className="w-[25%] flex justify-center">
        <img src={logo} alt="Logo" className="w-64" />
      </div>

      <div className="w-[50%] flex justify-evenly">
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative text-white text-sm
                       after:absolute after:left-0 after:-bottom-1
                       after:h-[2px] after:w-0 after:bg-white
                       after:transition-all hover:after:w-full"
          >
            {item.label}
          </Link>
        ))}

        {/* Contact Scroll */}
        <button
          onClick={scrollToFooter}
          className="relative text-white text-sm
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-0 after:bg-white
                     after:transition-all hover:after:w-full"
        >
          Contact
        </button>
      </div>

      <div className="w-[25%] flex justify-center">
        <Link
          to="/builder"
          className="px-6 py-3 bg-gradient-to-r
                     from-indigo-500 to-purple-600
                     rounded-lg text-white
                     shadow-lg hover:scale-105 transition"
        >
          Start Building
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
