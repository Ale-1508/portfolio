"use client";

import { motion } from "motion/react";
import Layout from "../_core/components/Layout";

export default function EducationScreen() {
  return (
    <Layout className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex flex-col gap-16 justify-center items-center`}>
      </motion.div>
    </Layout>
  );
}
