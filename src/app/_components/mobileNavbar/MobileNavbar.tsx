"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  return (
    <div>
      <div
        className="sm:hidden w-5 h-4 flex justify-between flex-col cursor-pointer"
        onClick={() => setOpenNavbar(!openNavbar)}
      >
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
      </div>
      {openNavbar && (
        <div className="sm:hidden fixed top-[60px] z-10 left-0 bg-white h-[calc(100vh_-_60px)] w-full flex flex-col items-center justify-center gap-11 text-3xl">
          <Link href="/" onClick={() => setOpenNavbar(!openNavbar)}>
            Home
          </Link>
          <Link href="/users" onClick={() => setOpenNavbar(!openNavbar)}>
            Users
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
