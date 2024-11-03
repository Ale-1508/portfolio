"use client";

import { useEffect, useState } from "react"

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Freelancer',
    from: 2020,
    to: undefined,
    onGoing: true
  },
  {
    id: 2,
    role: 'Technical Support Specialist',
    company: 'IG3 SRL',
    from: 2023,
    to: undefined,
    onGoing: true
  },
];

const getDateDifference = (from: number, to: number | undefined, onGoing: boolean): number => {
  const currentYear = new Date().getFullYear();
  if (onGoing) {
    return Math.min(currentYear - from, 4);
  } else if (to !== undefined) {
    const diff = to - from;
    return diff < 1 ? 1 : diff > 4 ? 4 : diff;
  } else {
    return 1;
  }
};

const getLastDigit = (number: number) => number % 10;

const TimeLine = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])
  
  return (
    <div className={`grid grid-cols-4 gap-y-4 
      transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      {experiences.map((experience) => {
        const dateDifference = getDateDifference(experience.from, experience.to, experience.onGoing);
        
        return (
          <div
            key={experience.id}
            style={{gridColumn: `${getLastDigit(experience.from) + 1} / span ${dateDifference}`}}
            className="
              flex justify-center md:justify-between items-center
              rounded-4xl py-4 px-8
              bg-primary-500 text-white
              selection:bg-primary-300 cursor-pointer
              hover:bg-primary-600 hover:shadow-2xl
          ">
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold
                text-lg md:text-xl lg:text-2xl
              '>{experience.company}</h2>
              <h3 className=' font-normal
                text-sm md:text-md lg:text-lg
              '>{experience.role}</h3>
            </div>
            <h1 className='text-3xl font-semibold hidden ml:inline'>{dateDifference}{ experience.onGoing ? "+" : ""}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;
