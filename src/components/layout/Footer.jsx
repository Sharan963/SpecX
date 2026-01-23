import React from "react";
import logo from "@/assets/Images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer"
        className="w-full h-87.5 bg-[#0A0A0F]
             border-t border-cyan-300/30
             shadow-[0_2px_20px_rgba(0,229,255,0.35)] flex"
      >
        <div className="w-[30%] h-full box-border p-10 flex flex-col">
          <img src={logo} alt="Footer Logo" className="w-64" />
          <p className="text-white text-xl font-heading-alt ml-10">
            From powerful PC components to essential gaming accessories, we
            bring you the gear that helps you play better and build smarter !!.
          </p>
        </div>
        <div className="flex-1 h-full flex items-center">
          <div className=" flex-1 h-full flex items-center justify-center flex-col">
            <h1 className="font-heading-alt text-3xl text-white">Products</h1>
            <div className="flex font-heading flex-col text-white gap-2 mt-3 cursor-pointer text-[15px]">
              <Link>PC Builder</Link>
              <Link>Pre Build Systems</Link>
              <Link>Components</Link>
            </div>
          </div>
          <div className=" flex-1 h-full flex items-center justify-center flex-col">
            <h1 className="font-heading-alt text-3xl text-white">Company</h1>
            <div className="flex font-heading flex-col text-white gap-2 mt-3 cursor-pointer text-[15px]">
              <Link>About Us</Link>
              <Link>Partners</Link>
              <Link>Support</Link>
            </div>
          </div>
          <div className=" flex-1 h-full flex items-center justify-center flex-col">
            <h1 className="font-heading-alt text-3xl text-white">Contact</h1>
            <div className="flex font-heading flex-col text-white gap-2 mt-3 cursor-pointer text-[15px]">
              <Link>Phone : +91 80860 13394</Link>
              <Link>Email : specXbuild@gmail.com</Link>
              <Link>WhatsApp : +91 95524 25789</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-[#0A0A0F] border-t border-gray-100 flex items-center justify-center text-white">
        <p>© 2026 SpecX. All rights reserved. Built with passion for gamers.</p>
      </div>
    </>
  );
};

export default Footer;
