"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { activePalette } from "@/logic/_core/common/colors";
import Link from "next/link";
import { useNavbarContext } from "../context/NavbarContext";


import { usePathname } from "next/navigation";

const CollapsedNavbar = () => {
    const { navbarState, setNavbarState } = useNavbarContext();
    const pathname = usePathname();
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setNavbarState((prevState) => ({
            ...prevState,
            navbarOptions: prevState.navbarOptions.map((option) => ({
                ...option,
                isSelected: option.href === pathname,
            })),
            isExpanded: false,
        }));

        setShowOptions(false);
    }, [pathname, setNavbarState]);


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
                    className={`
            absolute top-12 left-0 w-full ${activePalette.bg.primary["50"]}
            shadow-lg flex flex-col gap-4 py-4 px-4 rounded-md z-50
        `}
                >
                    {navbarState.navbarOptions.map((option) => (
                        <li key={option.href}>
                            <Link
                                href={option.href}
                                onClick={() => setShowOptions(false)}
                                aria-current={option.isSelected ? "page" : undefined}
                                className={`
                        block text-lg font-medium py-2 px-4 rounded-lg
                        transition-colors duration-200 ease-in-out
                        ${option.isSelected
                                        ? "text-secondary"
                                        : `${activePalette.bg.hover["100"]} hover:bg-opacity-50 ${activePalette.text.primary["800"]}`
                                    }
                    `}
                            >
                                {option.content}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CollapsedNavbar;
