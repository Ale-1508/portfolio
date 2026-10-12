"use client";

import { Suspense } from "react";

import { Header } from "@/components/Header";
import { useSearchParams } from 'next/navigation'
import ExperienceList from "./components/ExperienceList";
import ExperienceDetails from "./components/ExperienceDetails";
import { motion } from "motion/react";

const ShowcaseScreenBody = () => {
  const searchParams = useSearchParams()
  const workExperienceID = searchParams.get('id')
  // URL -> `/experience?id=my-project-id`

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex flex-col gap-16 justify-center items-center`}>
        <Header title="My Experience"></Header>

        {workExperienceID
          ? <ExperienceDetails id={workExperienceID} />
          : <ExperienceList />
        }
      </motion.div>
    </div>
  )
}

export default function ShowcaseScreen() {
  return (
    <Suspense fallback={<div className="text-lg">Experiences Loading...</div>}>
      <ShowcaseScreenBody />
    </Suspense>
  );
}
