import Balancer from 'react-wrap-balancer'

const projects = [
  {
    title:"Discord Manager",
    description:"An app built entirely in python to manage a premium discord group",
    photo:"",
  },
  {
    title:"Titolo",
    description:"",
    photo:"",
  },
]

interface ProjectCardProps {
  title : string
  description ?: string
  photo ?: string
}

const TitleSection = () => {
  return(
    <h1 className="
      w-full text-7xl text-center
      leading-tight
      font-semibold font-sans
      flex flex-row justify-center
      text-primary-600
      selection:bg-primary-500 selection:text-primary-50"
    >
      Work In Progress:
    </h1>
  )
}

const DescriptionSection = () => {
  let projectNumber: number = 3

  return(
    <h1 className="text-lg leading-8 
        flex flex-row justify-center
        text-center items-center
        font-semibold font-sans
        selection:bg-primary-500
        text-gray-700
        selection:text-primary-50">
      I'm currently working on
      <span className="mx-1 text-primary-600 text-2xl font-semibold">{projectNumber}</span>
      {projectNumber>1 ? "projects" : "project"} from start to finish!
    </h1>
  )
}

const ProjectCard = ( { project } : { project:ProjectCardProps } ) => {
  return(
    <div className="
      flex flex-row gap-4
      rounded-2xl cursor-pointer
      bg-primary-50
      p-8
    ">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="
          w-full text-2xl text-ellipsis
          leading-tight
          font-semibold font-sans
          flex flex-row justify-start
          text-primary-600
          selection:bg-primary-500 selection:text-primary-50"
        >
          {project.title}
        </h1>
        <h1 className="text-lg leading-8 
          flex flex-row justify-start
          text-left items-center
          font-medium font-sans
          selection:bg-primary-500
          text-gray-700
          selection:text-primary-50">
            <Balancer>
              {project.description}
            </Balancer>
        </h1>  
      </div>
      <div className="flex-1">
        hello
      </div>
    </div>
  );
}

const ProjectSection = () => {
  return(
    <ul className="list-none grid gap-4
      xs:mx-8 sm:mx-16 md:mx-24 lg:mx-32 my-4
      grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
       { projects.map(
        (project) => <li><ProjectCard project={project}/></li>
      ) }
    </ul>
  );
}

export default function WorkInProgress() {
  return(
    <div className="flex flex-col gap-8">
      <TitleSection />
      <DescriptionSection />
      <ProjectSection />
    </div>
  );
}