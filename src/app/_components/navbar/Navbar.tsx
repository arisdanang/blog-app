"use client";

import Link from "next/link";
import React from "react";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[60px] sticky top-0 bg-white">
      <div className="sm:text-[1.5rem] xl:text-2xl text-left font-bold flex-1">
        <Link href="/" className="pointer">
          Synapsis Blog
        </Link>
      </div>
      <div className="flex items-center gap-4 2xl:gap-5 justify-end ">
        <Link href="/" className="hidden sm:block">
          Home
        </Link>
        <Link href="/users" className="hidden sm:block">
          Users
        </Link>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
