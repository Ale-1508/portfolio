"use client";

import Link from "next/link";
import { useEffect, useState } from "react"
import { workExperiences } from "@/app/experience/data/experiences";
import { activePalette } from "@/logic/_core/common/colors";

const getDateDifference = (from: number, to?: number): number => {
  const currentYear = new Date().getFullYear();
  if (!to) {
    return Math.min(currentYear - from, getLastDigit(currentYear));
  } else {
    const diff = to - from;
    return diff < 1 ? 1 : diff > 4 ? 4 : diff;
  }
};

const getLastDigit = (number: number) => number % 10;

const TimeLine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])
  
  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <div className={`grid grid-cols-1 ml:grid-cols-5 gap-y-4
      transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      {workExperiences.map((experience) => {
        const dateDifference = getDateDifference(
          experience.period.start.getFullYear(), 
          experience.period.end?.getFullYear() 
        );
        
        const lastDigit = getLastDigit(experience.period.start.getFullYear());
        const col = lastDigit + 1;
        const containerStyle = windowSize.width >= 896
          ? {gridColumn: `${ col > 5 ? 5 : col} / span ${dateDifference > 0 ? dateDifference : 1}`}
          : {}

        return (
          <Link
            key={experience.id}
            href={`/experience?id=${experience.company}`}
            style={containerStyle}
            className={`
              timeline-media 
              flex justify-between items-center
              rounded-4xl py-4 px-8
              ${activePalette.bg.primary["500"]} text-white
              ${activePalette.bg.selection} cursor-pointer
              ${activePalette.bg.hover["600"]} hover:shadow-2xl
            `}>
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold
                text-xl lg:text-2xl
              '>{experience.company}</h2>
              <h3 className=' font-normal
                text-md lg:text-lg
              '>{experience.role}</h3>
            </div>
            <h1 className='text-3xl font-semibold'>{dateDifference}{ !experience.period.end ? "+" : ""}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default TimeLine;