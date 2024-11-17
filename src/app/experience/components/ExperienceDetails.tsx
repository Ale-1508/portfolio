import dynamic from "next/dynamic";
import { workExperiences, WorkExperiences } from "../data/experiences";
const ExperienceDetailsCard = dynamic(() => import('./ExperienceDetailsCard'), { ssr: false })

interface ExperienceDetailsProps {
  id: string
}

const ExperienceDetails = ( {id}: ExperienceDetailsProps ) => {
  const cardClassNames = `
  w-full lg:w-192
    flex flex-col items-start justify-start
    text-primary-500
    m-2 py-8 px-8 md:16 gap-8
    rounded-4xl
    bg-accents-ivory bg-opacity-25 
    hover:bg-sageGreen-200 hover:shadow-lg hover:bg-opacity-25
  `;
  
  const findExperience = (id:string): WorkExperiences | undefined => {
    return workExperiences.find(experience => experience.company === id)
  }

  const experience = findExperience(id);

  return (
    <div className={cardClassNames}>
      {
        experience
        ? <ExperienceDetailsCard experience={experience}/>
        : <h1 className={`
          h-64  w-full
          flex justify-center items-center 
          text-2xl font-normal 
        `}>{"Esperienza Non Trovata"}</h1>
      }
    </div>
  )
}

export default ExperienceDetails;