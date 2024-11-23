"use client";

import Balancer from 'react-wrap-balancer'
import { projects, Project } from "../data/projects"
import { useEffect, useState } from 'react'

const TitleSection = () => {
  return(
    <h1 className="
      w-full text-7xl text-center
      font-semibold
      flex flex-row justify-center
      text-primary-600
    ">
      Work In Progress:
    </h1>
  )
}

const DescriptionSection = () => {
  const projectNumber: number = projects.length

  return(
    <div className='
      flex flex-col group gap-4
      justify-center items-center 
      text-gray-700 select-none
    '>
      <h1 className={`text-md md:text-lg
          text-center font-semibold
        `}>
        {"I'm currently working on"}
        <span className="mx-1 text-primary-600 text-xl md:text-2xl font-semibold leading-tight">{projectNumber}</span>
        {projectNumber>1 ? "projects" : "project"} from start to finish!
      </h1>
      <p className="text-md font-semibold
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out"
      >
        {"These are the projects to which I'm currently dedicating my efforts."}
      </p>
    </div>
  )
}

//md:basis-1/2 lg:basis-2/3
const ProjectCard = ( { project } : { project:Project } ) => {
  return(
    <li 
      key={project.id}
      className={`
        m-2 py-8 px-16 
        "bg-accents-ivory hover:bg-sageGreen-200 text-white
        hover:shadow-lg bg-opacity-25 hover:bg-opacity-25
        flex flex-row gap-4 p-8
        rounded-5xl cursor-pointer
        bg-primary-50
      `}>
      <div className="flex flex-col gap-4"> 
        <h1 className="
          w-full text-2xl text-ellipsis
          leading-tight
          font-semibold
          flex flex-row justify-start
          text-primary-600
        ">
          {project.title}
        </h1>
        <h1 className="text-lg leading-8 
          flex flex-row justify-start
          text-left items-center
          font-medium
          text-gray-700">
            <Balancer>
              {project.description}
            </Balancer>
        </h1>  
      </div>
    </li>
  );
}

const ProjectSection = ( {isVisible} : {isVisible:boolean} ) => {
  return(
    <ul className={`list-none grid gap-4
      xs:mx-8 sm:mx-16 md:mx-24 lg:mx-32 2xl:mx-64 my-4
      grid-cols-1 xl:grid-cols-2
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
       { projects.map(
        (project, index) => (
          index < 4 
          ? <ProjectCard key={project.id} project={project}/>
          : null
        )
      ) }
    </ul>
  );
}

export default function WorkInProgress() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])
  
  return(
    <div className={`
      flex flex-col gap-8 font-sans leading-tight
      selection:bg-primary-500 selection:text-primary-50
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      <TitleSection />
      <DescriptionSection />
      <ProjectSection isVisible={isVisible} />
    </div>
  );
}