"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { activePalette } from "@/logic/_core/common/colors";
import { useNavbarContext } from "../context/NavbarContext";


import { usePathname } from "next/navigation";
import { cn } from "cn";

const CollapsedNavbar = () => {
    const { navbarState, setNavbarState } = useNavbarContext();
    const pathname = usePathname();
    const [showOptions, setShowOptions] = useState(false);


    return (
        <div className="flex flex-col gap-4 mx-4 relative mt-4">
            <div className="w-full flex px-4 justify-end items-center">
                <FontAwesomeIcon
                    size="xl"
                    icon={showOptions ? faTimes : faBars}
                    onClick={() => setShowOptions(!showOptions)}
                    className={`${activePalette.text.primary["800"]} cursor-pointer`}
                />
            </div>

            {showOptions && (
                <ul
                    className={cn(
                        "absolute top-12 left-0 w-full",
                        "shadow-lg flex flex-col gap-4 py-4 px-4 rounded-md z-50",
                        activePalette.bg.primary["100"],
                    )}>
                    {navbarState.navbarOptions.map((option) => {
                        const isActive = pathname === option.href;

                        return (
                            <li key={option.href}>
                                <Link
                                    href={option.href}
                                    onClick={() => setShowOptions(false)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "block text-lg font-medium py-2 px-4 rounded-lg",
                                        "transition-colors duration-200 ease-in-out",
                                        `${activePalette.bg.hover["150"]}`,
                                        isActive && activePalette.bg.primary["200"],
                                    )}>
                                    {option.content}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default CollapsedNavbar;
