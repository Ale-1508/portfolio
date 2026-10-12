import { activePalette } from "@/logic/_core/common/colors";
import { cn } from "cn";
import { motion } from "motion/react";

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl",
        "font-semibold leading-tight",
        activePalette.text.primary["600"],
      )}
    >{title}</motion.h1>
  )
}