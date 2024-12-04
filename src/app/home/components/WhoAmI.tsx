"use client";

import { activePalette } from "@/logic/_core/common/colors";
import { useEffect, useState } from "react"
import Balancer from "react-wrap-balancer";

const TitleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return(
    <h1 className={`
      flex flex-col gap-0 md:gap-2
      w-full text-center
      text-3xl xs:text-4xl sm:text-5xl lg:text-7xl
      leading-tight
      font-semibold font-sans
      justify-center
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      <span>
        {"Hi. I'm Alessandro."}
      </span>
      <span>
        {`A Full-Stack Developer.`}
      </span>
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
      text-base xs:text-lg sm:text-xl
      mx-4
      flex flex-col gap-2 group
      font-semibold font-sans
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      ${activePalette.text.primary["700"]}
    `}>
      <p className="leading-tight
        flex flex-col gap-1 justify-center">
          <span>
            <Balancer>{`I love transforming Ideas into seamless user experiences`}</Balancer>
          </span>
          <span className={`hidden sm:block`}>
          {`I work on Desktop, Mobile and Web solutions`}
          </span>
      </p>
      <p className="w-fit hidden sm:block
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out"
      >
        <Balancer>{`Check my portfolio on different Seasons!`}</Balancer>
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