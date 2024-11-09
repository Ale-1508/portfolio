import Balancer from 'react-wrap-balancer'

const projects = [
  {
    id:1,
    title:"Discord Manager",
    description:"An app built entirely in python to manage a premium discord group",
    photo:"",
    span: 2
  },
  {
    id:2,
    title:"Project2",
    description:"",
    photo:"",
    span: 1
  },
  {
    id:3,
    title:"Project3",
    description:"",
    photo:"",
    span: 2
  },
  {
    id:4,
    title:"Project4",
    description:"",
    photo:"",
    span: 1
  },
]

interface ProjectCardProps {
  id: number
  title : string
  description ?: string
  photo ?: string
  span: number
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
    <h1 className="text-md md:text-lg leading-8 
        flex flex-row justify-center
        text-center items-center
        font-semibold font-sans
        selection:bg-primary-500
        text-gray-700
        selection:text-primary-50">
      I'm currently working on
      <span className="mx-1 text-primary-600 text-xl md:text-2xl font-semibold">{projectNumber}</span>
      {projectNumber>1 ? "projects" : "project"} from start to finish!
    </h1>
  )
}

const ProjectCard = ( { project } : { project:ProjectCardProps } ) => {
  return(
    <li 
      key={project.id}
      className={`
        flex flex-row gap-4 p-8
        rounded-2xl cursor-pointer
        bg-primary-50
        row-span-${ project.span.toString() }`
      }>
      <div className="flex flex-col gap-4 
          md:basis-1/2 lg:basis-2/3">
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
      <div className="md:basis-1/2 lg:basis-1/3">
        hello
      </div>
    </li>
  );
}

const ProjectSection = () => {
  return(
    <ul className="list-none grid gap-4
      xs:mx-8 sm:mx-16 md:mx-24 lg:mx-32 2xl:mx-64 my-4
      sm:grid-cols-1 lg:grid-cols-2">
       { projects.map(
        (project) => <ProjectCard key={project.id} project={project}/>
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