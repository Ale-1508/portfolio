import Image from 'next/image';
import Balancer from "react-wrap-balancer"

import { Project, getStackIconSVG } from "../data/projects"
import classNames from 'classnames';

// cursor-pointer
const cardClassNames = `
  flex flex-col xl:flex-row
  items-center justify-center
  gap-8 w-full 
  m-2 py-8 px-8 md:px-16
  rounded-4xl
  bg-accents-ivory bg-opacity-25
  hover:bg-sageGreen-200 hover:shadow-lg hover:bg-opacity-25
  leading-tight
`;

const textSectionClassNames = `
  flex flex-col w-full
  items-start justify-start
  gap-8
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

interface BaseIconComponentProps { label: string; } 
interface IconComponentPropsSVG extends BaseIconComponentProps { icon: string | undefined; }

const iconsRoot = "/images/icons"


const IconComponentSVG = ( { icon, label }: IconComponentPropsSVG ) => { 
  if (!icon) return null; 
  
  return ( 
    <div className="relative flex items-center justify-center font-sans"> 
      <div className="group"> 
        <div className={classNames(" h-8 relative", label==="sqlite" ? "w-16" : "w-8")}>
          <Image src={`${iconsRoot}/${icon}`} alt={label} fill style={{ objectFit: 'contain' }} />
        </div> 
        <span className="absolute bottom-full left-1/2 
          transform -translate-x-1/2 mb-2 w-max px-2 py-1 
          rounded bg-primary-800 text-white text-xs opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"
        > {label} </span> 
      </div> 
    </div> 
  );
};

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
      <ul className={`
        flex flex-row  
        ml-4 gap-8
      `}>
        { project.techStack.map(( iconName ) => (<IconComponentSVG key={iconName} icon={getStackIconSVG(iconName)} label={iconName} />))}
      </ul>
    </div>
  )
}

const ProjectComponent = ( { project }: ProjectComponentProps ) => {

  return (
    <div className={cardClassNames}>
      <TextSection project={project}/>
    </div>
  )
}
//<ImageSection project={project}/>

export default ProjectComponent;