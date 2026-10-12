"use client";

import { motion } from "motion/react";

export default function EducationScreen() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex flex-col gap-16 justify-center items-center`}>
      </motion.div>
    </div>
  );
}
