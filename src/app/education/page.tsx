"use client";

import Layout from "../_core/components/Layout";
import { useEffect, useState } from "react"

export default function EducationScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <Layout className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-4 mb-16">
      <div className={`
        flex flex-col gap-16 justify-center items-center
        transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>

      </div>
    </Layout>
  );
}
