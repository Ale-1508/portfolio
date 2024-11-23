"use client";

import { useEffect, useState } from "react"

const TitleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return(
    <h1 className={`
      w-full text-7xl text-center
      leading-tight
      font-semibold font-sans
      flex flex-row justify-center
      text-primary-600
      selection:bg-primary-500 selection:text-primary-50
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      Ciao. Sono Alessandro.<br />Sviluppatore Full-Stack.
    </h1>
  )
}

const DescriptionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])
  
  return(
    <div className={`
      text-center justify-center items-center
      flex flex-col gap-2 group
      font-semibold font-sans
      text-gray-700
      selection:bg-primary-500 selection:text-primary-50"
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      <h1 className="leading-tight text-lg
        flex flex-row justify-center
      ">
        Mi piace trasformare le idee in impeccabili User Experience seguendo<br/> 
        l'intero processo di sviluppo dalla progettazione alla realizzazione.
      </h1>
      <p className="text-md w-fit
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out"
      >
        Sviluppo App Desktop, Mobile e Web.
      </p>
    </div>
  )
}

export default function WhoAmI() {
  return(
    <div className="flex flex-col gap-16">
      <TitleSection />
      <DescriptionSection />
    </div>
  );
}