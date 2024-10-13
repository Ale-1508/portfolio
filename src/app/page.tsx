'use client';

import Navbar from "./_core/components/Navbar";
import HomeScreen from "./home/HomeScreen";
import { useState } from "react";

export default function Home() {

  const [currentScreen, setCurrentScreen] = useState("home");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HomeScreen />
    </div>
  );
}
