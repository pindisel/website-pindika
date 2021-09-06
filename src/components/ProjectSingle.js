import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./project";
import "./ProjectSingle.css";

const ProjectSingle = () => {
    const { name } = useParams();
    console.log(name);
    let project = projects.find((projects) => projects.name === name.replaceAll("-", " "));

    console.log(project);

    return (
        <div className="project-single">
            <h1>{project.name}</h1>

            <p>{project.desc}</p>
        </div>
    );
};

export default ProjectSingle;
