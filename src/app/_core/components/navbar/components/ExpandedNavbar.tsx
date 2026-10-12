"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

import { activePalette } from "@/logic/_core/common/colors";
import { useNavbarContext } from "../context/NavbarContext";

const StandardNavbar = () => {
  const { navbarState } = useNavbarContext();
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const activeLink = Array.from(nav.querySelectorAll("a")).find(
      (link) => link.pathname === pathname
    );

    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const paddingX = 24;
    const paddingY = 8;

    setPill({
      top: linkRect.top - navRect.top - paddingY,
      left: linkRect.left - navRect.left - paddingX,
      width: linkRect.width + paddingX * 2,
      height: linkRect.height + paddingY * 2,
    });
  }, [pathname, navbarState.navbarOptions]);

  return (
    <nav
      ref={navRef}
      className="relative mt-8 sm:mb-8 justify-center flex-col sm:flex-row flex gap-4"
    >
      <ul className="flex flex-row gap-4 items-center">
        {navbarState.navbarOptions.map((option) => {
          const isActive = pathname === option.href;

          return (
            <li
              key={option.href}
              className={`
                relative text-center text-lg select-none font-medium font-sans
                py-2 px-4 rounded-4xl z-10 overflow-hidden
                transition-colors duration-100 ease-in-out
                ${isActive
                  ? "text-secondary"
                  : `${activePalette.bg.hover["100"]} hover:bg-opacity-50 ${activePalette.text.primary["800"]}`
                }
              `}
            >
              <Link
                href={option.href}
                aria-current={isActive ? "page" : undefined}
              >
                {option.content}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        aria-hidden="true"
        style={{
          top: pill.top,
          left: pill.left,
          width: pill.width,
          height: pill.height,
          opacity: pill.width > 0 ? 1 : 0,
        }}
        className={cn(
          "bg-opacity-50 rounded-4xl absolute pointer-events-none",
          "transition-all duration-300 ease-in-out",
          activePalette.bg.primary["300"],
        )}
      />
    </nav>
  );
};

export default StandardNavbar;