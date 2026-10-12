"use client";

import Layout from "../_core/components/Layout";

import { Header } from "@/components/Header";
import { motion } from 'motion/react';
import ProjectList from "./components/ProjectList";

export default function ShowcaseScreen() {
  return (
    <Layout currentPath="Showcase" className="mx-4 sm:mx-16 md:mx-24 lg:mx-32 gap-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col gap-8 sm:gap-16 justify-center items-center"
      >
        <Header title="Project Showcase"></Header>
        <ProjectList />
      </motion.div>
    </Layout>
  );
}
