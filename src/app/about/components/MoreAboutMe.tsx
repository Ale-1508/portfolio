"use client";
import Balancer from "react-wrap-balancer"
import { useEffect, useState } from "react"
import { activePalette } from "@/logic/_core/common/colors";

const MoreAboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <div className={`
      flex flex-col gap-10 justify-center items-center
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      <h1 className={`w-full xl:w-160
        flex justify-start items-start 
        text-2xl md:text-4xl lg:text-5xl 
        font-semibold leading-tight
        ${activePalette.text.primary["600"]}
      `}>{`More About Me:`}</h1>
      <p className={`
        w-full xl:w-160
        text-lg lg:text-xl 
        font-normal leading-tight
        ${activePalette.text.primary["600"]}
      `}>
        <Balancer>
        {`
          My journey into the world of development began in high school, 
          and it's been a love affair ever since. 
          Over the years, I've brought to life every wild idea that sparked in my mind.
        `}
        <br /><br />
        {`
          I started by crafting algorithms for fun to tackle tasks 
          like mining diamonds in Minecraft, crunching numbers, 
          analyzing Excel data and keeping tabs on market news. 
          But as my skills grew, so did the complexity of my projects.
        `}
        <br /><br />
        {`Today, I'm a versatile developer creating`} 
        <span className='font-semibold'>{` Web`}</span>, 
        <span className='font-semibold'>{` Desktop`}</span>
        {` and `}
        <span className='font-semibold'>{` Mobile`}</span>
        {` applications. `} 
        {`
          Yet, my journey is far from over. 
          As a perpetual learner, I'm always eager to expand my skills and knowledge.
        `}
        <br /><br />
        {`
          As a person, I'm passionate about studying and applying 
          my expertise to tackle real-world challenges. 
          It's this drive for
        `} 
        <span className='font-semibold'>{`Problem-Solving`}</span>
        {`
         that has earned me a reputation for being 
        `}
        <span className='font-semibold'>{` Resourceful `}</span> 
        {`and `}<span className='font-semibold'>{`innovative`}</span>.
        <br /><br />
        {`
          When I'm not immersed in code, you'll find me exploring the world, hitting the gym, 
          or crafting intricate cosplays for the next convention with my partner.
        `}
        <span className='font-semibold'>{` Adventure`}</span>
        {`, `}
        <span className='font-semibold'>{`Fitness`}</span>
        {`, and `}
        <span className='font-semibold'>{`Creativity`}</span>
        {` are my fuels outside of development!`}
        </Balancer>
      </p>
    </div>
    
  )
}

export default MoreAboutMe