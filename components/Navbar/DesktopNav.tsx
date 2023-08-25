"use client";

import Link from "next/link";
import React from "react";
import { Sansita } from "@/utility/font";
import { BsFillMoonFill } from "react-icons/bs";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const DesktopNav = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="px-4 h-14 w-full fixed left-0 right-0 top-0 text-white  flex items-center justify-between bg-primary shadow-xl ">
        <div id="logo" className={Sansita.className}>
          <h1 className="text-2xl font-semibold">Majestic Manors</h1>
        </div>
        <div id="button" className="flex items-center gap-4">
          {/* <Button onClick={toggleTheme}>
            <BsFillMoonFill />
          </Button> */}
          <Link
            href="#"
            className="px-4 py-2 text-sm rounded-[5px] hover:shadow-lg hover:bg-[#FF4081]"
          >
            Post Property
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-sm rounded-[5px] shadow-lg bg-white hover:bg-gray-200 text-[#F50057]"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
