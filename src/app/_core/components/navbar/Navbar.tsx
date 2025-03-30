"use client";
import { useEffect, useState } from "react";
import CollapsedNavbar from "./components/CollapsedNavbar";
import StandardNavbar from "./components/ExpandedNavbar";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])

  return (
    <div>
      {
        windowSize.width <= 640
        ? <CollapsedNavbar/>
        : <StandardNavbar/>
      }
    </div>
  )
}

export default Navbar