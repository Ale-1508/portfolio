import Balancer from "react-wrap-balancer"
import { WorkExperiences } from "../data/experiences";
import Title from "@/labels/Title";
import SectionTitle from "@/labels/SectionTitle";

interface ExperienceDetailsProps {
  experience: WorkExperiences
}

const ExperienceDetailsCard = ( {experience}: ExperienceDetailsProps ) => {
  return (
    <div 
    suppressHydrationWarning
    className={`
      flex flex-col gap-4 w-full
    `}>
      <div className={`
          flex flex-col md:flex-row 
          gap-2 md:gap-0 w-full
          justify-between items-start
        `}>
        <div className="flex flex-col gap-0">
          <Title>{experience.company}</Title>
          <SectionTitle className="text-primary-500">{experience.role}</SectionTitle>
        </div>
        <h1 className="font-medium">
          {`
            ${experience.period.start.toLocaleDateString()} - 
            ${experience.period.end?.toLocaleDateString() ?? "On Going"}
            `}
        </h1>
      </div>
      <p>
        <Balancer>
          {experience.description}
        </Balancer>
      </p>
      <SectionTitle>ACHIEVEMENTS</SectionTitle>
      <ul className="list-disc flex flex-col gap-2 mx-4">
        {
          experience.achievements.map( (achievement: string) => (
            <li key={achievement}><Balancer>{achievement}</Balancer></li>
          ))
        }
      </ul>
    </div>
  )
}

export default ExperienceDetailsCard;