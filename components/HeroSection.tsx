"use client";

import useRoutes from "@/hooks/useRoutes";
import { Sansita } from "@/utility/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

const HeroSection = () => {
  // required hooks and essentials
  const routes = useRoutes();
  const pathname = usePathname();

  // Refs for all tabs
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // condition for getting underline back to the current url tab
  const condition = useMemo(() => routes.find((tab) => tab.active), [pathname]);

  // function which gives the index for return the underline to the currentUrl
  const currentIndex = useMemo(
    () => routes.findIndex((tab) => tab.active === condition?.active),
    [pathname]
  );

  // states for handling the functionality
  const [hoveredTab, setHoveredTab] = useState<number | null>(currentIndex);
  const [underlineProps, setUnderlineProps] = useState<{
    width: number;
    offsetLeft: number | null;
  }>({
    width: 0,
    offsetLeft: 0,
  });

  // function which allows to handle when hover
  useEffect(() => {
    if (hoveredTab !== null && tabsRef.current[hoveredTab]) {
      const tab = tabsRef.current[hoveredTab];
      const position = tabsRef.current[hoveredTab]?.getBoundingClientRect();
      if (tab && position) {
        setUnderlineProps({
          width: tab.offsetWidth,
          offsetLeft: position.left,
        });
      }
    }
  }, [pathname, currentIndex, hoveredTab]);

  return (
    <div className="flex flex-col px-6 mt-20 py-10 items-center justify-center">
      <legend
        className={`text-3xl font-bold truncate tracking-wide ${Sansita.className}`}
      >
        Welcome back let's continue the search
      </legend>

      <div className="py-10  text-sm font-semibold ">
        <div className="flex items-center w-screen justify-center">
          {routes.map((tab, id) => (
            <Link
              onMouseOver={() => setHoveredTab(id)}
              onMouseLeave={() => {
                setHoveredTab(currentIndex);
              }}
              className={`px-[20px] py-[10px] cursor-pointer inline-block hover:text-primary ${
                tab.active && hoveredTab === currentIndex && "text-primary"
              } `}
              href={tab.href}
              key={id}
              ref={(ref) => (tabsRef.current[id] = ref)}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <div
          style={{
            width: underlineProps.width,
            transform: `translateX(${underlineProps.offsetLeft}px)`,
          }}
          className={`h-[3px] bg-primary transition-transform duration-1000 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
