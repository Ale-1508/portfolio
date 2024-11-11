import Image from 'next/image';
import Balancer from "react-wrap-balancer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { Project } from "../data/projects"


const cardClassNames = `
  flex flex-col xl:flex-row
  items-center justify-center
  gap-8 w-full 
  m-2 py-8 px-8 md:px-16
  rounded-4xl
  bg-accents-ivory hover:bg-sageGreen-200 bg-opacity-25
  hover:shadow-lg hover:bg-opacity-25
  leading-tight
`;

const textSectionClassNames = `
  flex flex-col w-full
  items-start justify-start
  gap-8
`;

const imageSectionClassNames = `  
  relative 
  w-full h-full
`;

const iconClassNames = `
  text-primary-700
  w-48 h-48
`;

const pictureClassNames = `
  rounded-xl shadow-lg 
  w-full h-full
`;

const h1ClassNames = `
  text-2xl lg:text-3xl 
  font-semibold leading-tight
  text-primary-600
`;

const descriptionClassNames = `
  text-md lg:text-lg 
  font-normal leading-tight
  text-primary-800
`;

const h2ClassNames = `
  text-lg lg:text-xl 
  font-semibold leading-tight
  text-primary-600
`;

const ulClassNames = `
  flex flex-col  
  ml-4 gap-2
`;

const liClassNames = `
  list-disc
  text-md font-normal 
  text-primary-600
`;

interface ProjectComponentProps {
  project: Project
}

const picturesRoot = "/images/projects"

const TextSection = ({ project }: ProjectComponentProps) => {
  return (
    <div className={textSectionClassNames}>
      <h1 className={h1ClassNames}>{ project.title }</h1>
      <p className={descriptionClassNames}><Balancer>{project.description}</Balancer></p>
      <h2 className={h2ClassNames}>Key Features</h2>
      <ul className={ulClassNames}>
        { project.keyFeatures.map(( feature ) => (<li key={feature} className={liClassNames}>{feature}</li>)) }
      </ul>
      <h2 className={h2ClassNames}>Tech Stack</h2>
      <ul className={ulClassNames}>
        { project.techStack.map(( element ) => (<li key={element} className={liClassNames}>{element}</li>)) }
      </ul>
    </div>
  )
}

const ImageSection = ({ project }: ProjectComponentProps) => {
  return (
    <div className={imageSectionClassNames}>
      {
        project.img.src !== ""
        ? <Image
        className={pictureClassNames}
        src={`${picturesRoot}/${project.img.src}`}
        width={project.img.width !== undefined ? project.img.width : 256}
        height={project.img.height !== undefined ? project.img.height : 256}
        alt={project.img.alt}
        unoptimized={true}
        quality={100}
        />
        : <FontAwesomeIcon className={iconClassNames} icon={faImage} />
      }
      </div>
  )
}


const ProjectComponent = ( { project }: ProjectComponentProps ) => {

  return (
    <div className={cardClassNames}>
      <TextSection project={project}/>
      <ImageSection project={project}/>
    </div>
  )
}

export default ProjectComponent;