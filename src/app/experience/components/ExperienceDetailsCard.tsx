import Balancer from "react-wrap-balancer"
import { useState, useEffect } from 'react'
import { ExperiencePeriod, WorkExperiences } from "../data/experiences";

interface ExperienceDetailsProps {
  experience: WorkExperiences
}

const ExperienceDetailsCard = ( {experience}: ExperienceDetailsProps ) => {
  return (
    <div 
    suppressHydrationWarning
    className={`
      flex flex-col
    `}>
      <h1>{experience.company}</h1>
      <h2>{experience.role}</h2>
      <h1>
        {`
          ${experience.period.start.toLocaleDateString()} - 
          ${experience.period.end?.toLocaleDateString() ?? "On Going"}
        `}
      </h1>
      <p>
        <Balancer>
          {experience.description}
        </Balancer>
      </p>
      <h2>ACHIEVEMENTS</h2>
      <ul className="list-disc flex flex-col gap-2 mx-4">
        {
          experience.achievements.map( (achievement: string) => (
            <li><Balancer>{achievement}</Balancer></li>
          ))
        }
      </ul>
    </div>
  )
}

export default ExperienceDetailsCard;