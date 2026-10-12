import Balancer from "react-wrap-balancer"

import { cn } from "cn";
import { Project, getStackIcon } from "../data/projects"
import { activePalette } from "@/logic/_core/common/colors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// cursor-pointer
const cardClassNames = `
  flex flex-col xl:flex-row
  items-center justify-center
  gap-8 w-full 
  py-8 px-8 md:px-16
  rounded-4xl
  ${activePalette.bg.primary["100"]} bg-opacity-25
  ${activePalette.bg.hover["200"]} hover:shadow-lg hover:bg-opacity-25
  leading-tight
`;

const textSectionClassNames = `
  flex flex-col w-full
  items-start justify-start
  ${activePalette.text.primary["600"]}
  gap-8
`;

const h1ClassNames = `
  text-2xl lg:text-3xl 
  font-semibold leading-tight
`;

const descriptionClassNames = `
  text-md lg:text-lg 
  font-normal leading-tight
  ${activePalette.text.primary["800"]}
`;

const h2ClassNames = `
  text-lg lg:text-xl 
  font-semibold leading-tight
`;

const ulClassNames = `
  flex flex-col  
  ml-4 gap-2
`;

const liClassNames = `
  list-disc
  text-md font-normal 
`;

interface ProjectComponentProps {
  project: Project
}


interface IconComponentPropsFA {
  icon: IconDefinition | undefined;
  label: string;
}

const IconComponentFA = ({ icon, label }: IconComponentPropsFA) => {
  return (
    <div className="relative flex items-center justify-center font-sans">
      <div className="group flex items-center justify-center">
        <div className="h-8 w-8 flex items-center justify-center text-gray-700">
          {icon ? (
            <FontAwesomeIcon icon={icon} className="h-7 w-7 object-contain" />
          ) : (
            <span className={cn(
              "text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm",
              activePalette.text.primary["800"] + " " + activePalette.bg.primary["200"]
            )}>
              {label}
            </span>
          )}
        </div>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 rounded text-xs bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {label}
        </span>
      </div>
    </div>
  );
};

const TextSection = ({ project }: ProjectComponentProps) => {
  return (
    <div className={textSectionClassNames}>
      <h1 className={h1ClassNames}>{project.title}</h1>
      <p className={descriptionClassNames}><Balancer>{project.description}</Balancer></p>
      <h2 className={h2ClassNames}>Key Features</h2>
      <ul className={ulClassNames}>
        {project.keyFeatures.map((feature) => (<li key={feature} className={liClassNames}>{feature}</li>))}
      </ul>
      <h2 className={h2ClassNames}>Tech Stack</h2>
      <ul className={`
        flex flex-row  
        ml-4 gap-8
      `}>
        {project.techStack.map((iconName) => (
          <IconComponentFA
            key={iconName}
            icon={getStackIcon(iconName)}
            label={iconName}
          />
        ))}
      </ul>
    </div>
  )
}

const ProjectComponent = ({ project }: ProjectComponentProps) => {

  return (
    <div className={cardClassNames}>
      <TextSection project={project} />
    </div>
  )
}
//<ImageSection project={project}/>

export default ProjectComponent;