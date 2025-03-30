"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { activePalette } from "@/logic/_core/common/colors";
import Link from "next/link";
import { useNavbarContext } from "../context/NavbarContext";
import { usePathname, useRouter } from "next/navigation";

const CollapsedNavbar = () => {
    const { navbarState, setNavbarState } = useNavbarContext();
    const router = useRouter();
    const pathname = usePathname();
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setNavbarState((prevState) => {
            const updatedNavbarOptions = prevState.navbarOptions.map((option) => ({
                ...option,
                isSelected: option.href === pathname,
            }));
    
            return {
                ...prevState,
                navbarOptions: updatedNavbarOptions,
                position: !prevState.isExpanded
                    ? { top: 0, left: 0, height: 0, width: 0 }
                    : prevState.position,
                isExpanded: false,
            };
        });
    }, [pathname, setNavbarState]);

    const handleClick = (href: string) => {
        const updatedNavbarOptions = navbarState.navbarOptions.map((option) => ({
            ...option,
            isSelected: option.href === href,
        }));

        setNavbarState((prevState) => ({
            ...prevState,
            navbarOptions: updatedNavbarOptions,
        }));

        router.push(href);
        setShowOptions(false);
    };

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
            shadow-lg flex flex-col gap-4 py-4 px-4 rounded-md z-50`}
                >
                    {navbarState.navbarOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(option.href)}
                            className={`${option.isSelected
                                ? "text-secondary"
                                : `${activePalette.bg.hover["100"]} hover:bg-opacity-50 ${activePalette.text.primary["800"]}`
                                } text-lg font-medium py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out cursor-pointer`}
                        >
                            <Link
                                href={option.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(option.href);
                                }}
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
