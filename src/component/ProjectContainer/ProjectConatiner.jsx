import { Fragment } from "react";
import Project from "../Projects/Project";

function ProjectContainer({projects}){
    return(
        <Fragment>
            {
                projects.map((project)=>{
                    return <Project key={project.id} project={project}/>
                })
            }
        </Fragment>
    )
}

export default ProjectContainer;

// {
//     <Project key={project.id} project={project}/>
// }