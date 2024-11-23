"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react"
import { Header } from "@/components/Header";
import { useSearchParams } from 'next/navigation'
import ExperienceList from "./components/ExperienceList";
import ExperienceDetails from "./components/ExperienceDetails";

export default function ShowcaseScreen() {

  const searchParams = useSearchParams()
  const workExperienceID = searchParams.get('id')
  // URL -> `/experience?id=my-project-id`

  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <Layout currentPath="" className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-4 mb-16">
      <div className={`
        flex flex-col gap-16 justify-center items-center
        transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>
        <Header title="My Experience" isVisible={isVisible}></Header>
        {workExperienceID
          ? <ExperienceDetails id={workExperienceID}/>
          : <ExperienceList />
        }
      </div>
    </Layout>
  );
}
