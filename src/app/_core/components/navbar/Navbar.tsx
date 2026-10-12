"use client";
import CollapsedNavbar from "./components/CollapsedNavbar";
import StandardNavbar from "./components/ExpandedNavbar";
import { useIsMobile } from "@/hooks";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? <CollapsedNavbar /> : <StandardNavbar />}
    </div>
  );
};

export default Navbar