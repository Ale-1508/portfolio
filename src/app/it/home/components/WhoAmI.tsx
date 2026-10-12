"use client";

import { motion } from "motion/react";
import { cn } from "cn";

const TitleSection = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full text-7xl text-center",
        "leading-tight",
        "font-semibold font-sans",
        "flex flex-row justify-center",
        "text-primary-600",
        "selection:bg-primary-500 selection:text-primary-50",
      )}>
      Ciao. Sono Alessandro.<br />Sviluppatore Full-Stack.
    </motion.h1>
  )
}

const DescriptionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "text-center justify-center items-center",
        "flex flex-col gap-2 group",
        "font-semibold font-sans",
        "text-gray-700",
        "selection:bg-primary-500 selection:text-primary-50",
      )}
    >
      <h1 className="leading-tight text-lg
        flex flex-row justify-center
      ">
        Mi piace trasformare le idee in impeccabili User Experience seguendo<br />
        {"l'intero processo di sviluppo dalla progettazione alla realizzazione."}
      </h1>
      <p className="text-md w-fit
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out"
      >
        Sviluppo App Desktop, Mobile e Web.
      </p>
    </motion.div>
  )
}

export default function WhoAmI() {
  return (
    <div className="flex flex-col gap-16">
      <TitleSection />
      <DescriptionSection />
    </div>
  );
}