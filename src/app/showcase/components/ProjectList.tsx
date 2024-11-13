import { projectList } from "../data/projects"
import ProjectComponent from "./ProjectComponent";


const ProjectList = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
      { projectList.map( ( project ) => (<ProjectComponent key={project.id} project={project}/>)) }
    </div>
  )
}

export default ProjectList