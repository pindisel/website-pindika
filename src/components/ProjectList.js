import React from "react";

const ProjectList = (props) => {
    const projects = props.projects;
    console.log(projects);
    return (
        <div className="project-container-1">
            {projects.slice(0, 3).map((project) => (
                <a className="project-container-2" href={project.link}>
                    <h2 className="project-name">{project.name}</h2>
                    <img src={project.image} className="project-thumbnail" />
                </a>
            ))}
        </div>
    );
};

export default ProjectList;
