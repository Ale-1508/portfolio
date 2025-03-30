"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { activePalette } from "@/logic/_core/common/colors";
import { useNavbarContext } from "../context/NavbarContext";

const StandardNavbar = () => {
  const { navbarState, setNavbarState } = useNavbarContext();
  const router = useRouter();

  const handleClick = async (event: React.MouseEvent<HTMLLIElement>, optionIndex: number, href: string) => {
    event.preventDefault();
  
    const liElement = event.currentTarget;
    const rect = liElement.getBoundingClientRect();
    const navRect = liElement.closest("nav")!.getBoundingClientRect();
  
    const newPosition = {
      top: rect.top - navRect.top,
      left: rect.left - navRect.left,
      height: rect.height,
      width: rect.width,
    };
  
    const updatedNavbarOptions = navbarState.navbarOptions.map((option, index) => ({
      ...option,
      isSelected: index === optionIndex,
    }));
    
    setNavbarState(() => {
      return {
        navbarOptions: updatedNavbarOptions,
        position: newPosition,
        isExpanded: true
      };
    });
  
    setTimeout(() => {
      router.push(href);
    }, 300);
  };
  

  return (
    <nav className="relative mt-8 sm:mb-8 justify-center flex-col sm:flex-row flex gap-4">
      <ul className="flex flex-row gap-4 items-center">
        {navbarState.navbarOptions.map((option, index) => (
          <li
            key={index}
            onClick={(e) => handleClick(e, index, option.href)}
            className={`${option.isSelected
              ? "text-secondary"
              : `${activePalette.bg.hover["100"]} hover:bg-opacity-50 ${activePalette.text.primary["800"]}`
              } text-center text-lg select-none font-medium font-sans py-2 px-4 rounded-4xl z-10 overflow-hidden transition-colors duration-100 ease-in-out`}
          >
            <Link
              href={option.href}
              onClick={(e) => e.preventDefault()}
            >
              {option.content}
            </Link>
          </li>
        ))}
      </ul>
      <div
        style={{
          top: `${navbarState.position.top}px`,
          left: `${navbarState.position.left}px`,
          height: `${navbarState.position.height}px`,
          width: `${navbarState.position.width}px`,
        }}
        className={`${activePalette.bg.primary["300"]} bg-opacity-50 rounded-4xl w-24 h-10 absolute transition-all duration-300 ease-in-out`}
      ></div>
    </nav>
  );
};

export default StandardNavbar;
