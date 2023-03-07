import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";

const Navbar = () => {
  return (
    <div className="flex h-24 justify-between items-center mx-6">
      <Image alt="hi" src={Logo}></Image>
      <div className=" font-normal text-lg text-[#7C8DB0]   flex items-center justify-center gap-x-5">
        <div className="hover:text-[#605DEC]">Flights</div>
        <div className="hover:text-[#605DEC]">Hotels</div>
        <div className="hover:text-[#605DEC]">Packages</div>
        <div className="hover:text-[#605DEC]">Sign in</div>
        <div className="hover:text-[#605DEC] bg-[#605DEC]  text-white rounded py-3 px-5">Sign up</div>
      </div>
    </div>
  );
};

export default Navbar;
