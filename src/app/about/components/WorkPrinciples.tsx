"use client";

import classNames from "classnames";
import Balancer from "react-wrap-balancer";
import { useEffect, useState } from "react"
import { activePalette } from "@/logic/_core/common/colors";

const myPrinciples = [
  {
    id: 1,
    title: "User-Centered Design",
    description: `Creating intuitive and responsive interfaces that prioritize user experience. 
    Every decision, from layout to functionality, is driven by the goal of making 
    interactions seamless and enjoyable.`,
  },
  {
    id: 2,
    title: "Efficient and Scalable Code",
    description: `Writing clean, maintainable, and efficient code 
    that can scale with the growth of the application. 
    Utilizing best practices and design patterns to ensure 
    the application remains robust and adaptable over time.`,
  },
  {
    id: 3,
    title: "Continuous Learning and Improvement",
    description: `Staying ahead in the ever-evolving tech landscape 
    by constantly learning and integrating new technologies. 
    This commitment ensures that solutions are innovative 
    and utilize the latest advancements in software development.`,
  },
  {
    id: 4,
    title: "Collaboration and Communication",
    description: `Working effectively within teams, 
    fostering a culture of collaboration and open communication. 
    Emphasizing the importance of teamwork to deliver high-quality 
    products that meet client and user expectations.`,
  },
]

interface PrincipleProps {
  id: number
  title: string
  description: string
}

const Principle = ( { principle }: { principle: PrincipleProps } ) => {
  return (
    <div className="
      flex flex-col gap-4
      col-span-2 lg:col-span-1
      h-full
    ">
      <h1 className={`font-medium 
        text-xl md:text-2xl 2xl:text-3xl
        ${activePalette.text.primary["300"]}
      `}>{principle.id}.</h1>
      <h2 className={`font-semibold
        text-xl md:text-2xl
        ${activePalette.text.primary["500"]}
      `}>{principle.title}</h2>
      <p className={`font-normal
        text-md md:text-lg
        ${activePalette.text.primary["500"]}
      `}><Balancer>{principle.description}</Balancer></p>
    </div>
  )
}

const Card = ( ) => {
  const cardClassNames = classNames(
    "grid grid-cols-2",
    "items-start justify-start",
    "m-2 py-8 px-8 md:16 gap-x-8 gap-y-16",
    "rounded-4xl justify-evenly items-center", 
    activePalette.bg.primary["200"],
    `bg-opacity-25 text-white`,
    "md:col-span-2",
  );
  return (
    <div className={cardClassNames}>
      { myPrinciples.map( (principle, index)=> ( index<4 && <Principle key={principle.id} principle={principle} /> ))}
    </div>
  )
}

const WorkPrinciples = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <div className={`
      flex flex-col gap-8 justify-center items-center 
      transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}>
      <h1 className={`
        text-2xl md:text-4xl lg:text-5xl 
        font-semibold leading-tight
        ${activePalette.text.primary["600"]}
      `}>{`My Principles:`}</h1>
      <Card />
    </div>
  )
}

export default WorkPrinciples