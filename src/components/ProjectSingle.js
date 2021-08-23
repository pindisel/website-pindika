import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./project";
import "./ProjectSingle.css";

const ProjectSingle = () => {
    const { id } = useParams();
    let project = projects.find((projects) => projects.id === Number(id));
    console.log(id);
    console.log(project);

    return (
        <div className="tes">
            {project.name}
            {project.link}
            {project.desc}
        </div>
    );
};

export default ProjectSingle;
