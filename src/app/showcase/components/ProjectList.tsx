import { projectList } from "../data/projects"
import ProjectComponent from "./ProjectComponent";


const ProjectList = () => {
  return (
    <div className='flex flex-col gap-8'>
      { projectList.map( ( project ) => (<ProjectComponent key={project.id} project={project}/>)) }
    </div>
  )
}

export default ProjectList