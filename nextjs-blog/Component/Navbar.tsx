import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <Image alt="hi" src={Logo}></Image>
    </div>
  );
};

export default Navbar;
