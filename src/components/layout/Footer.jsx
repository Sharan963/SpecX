import React from "react";
import logo from "@/assets/Images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="w-full bg-[#0A0A0F]
        border-t border-cyan-300/30
        shadow-[0_2px_20px_rgba(0,229,255,0.35)]
        flex justify-center"
      >
        <div className="w-[90%] max-w-7xl flex py-14 max-sm:flex-col max-sm:gap-12">

          {/* Logo + Text */}
          <div className="w-[35%] max-sm:w-full flex flex-col gap-3">
            <img src={logo} alt="Footer Logo" className="w-48" />

            <p className="text-white/80 text-sm font-heading leading-relaxed">
              From powerful PC components to essential gaming accessories,
              we bring you the gear that helps you play better and build smarter.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-3 max-sm:grid-cols-1 gap-12">

            <div className="flex flex-col gap-3">
              <h1 className="font-heading-alt text-2xl text-white">
                Products
              </h1>
              <div className="flex flex-col gap-2 text-base text-white/90">
                <Link>PC Builder</Link>
                <Link>Pre Build Systems</Link>
                <Link>Components</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-heading-alt text-2xl text-white">
                Company
              </h1>
              <div className="flex flex-col gap-2 text-base text-white/90">
                <Link>About Us</Link>
                <Link>Partners</Link>
                <Link>Support</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-heading-alt text-2xl text-white">
                Contact
              </h1>
              <div className="flex flex-col gap-2 text-base text-white/90">
                <span>📞 +91 80860 13394</span>
                <span>📧 specXbuild@gmail.com</span>
                <span>💬 +91 95524 25789</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-[#0A0A0F] border-t border-white/10 flex items-center justify-center text-white text-sm text-center px-4">
        © 2026 SpecX. All rights reserved. Built with passion for gamers.
      </div>
    </>
  );
};

export default Footer;
