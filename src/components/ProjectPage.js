import React from "react";
import ProjectList from "./ProjectList";
import "./ProjectPage.css";
import { projects } from "./project";

const ProjectPage = () => {
    return (
        <div className="project-page">
            <h1>P R O J E C T</h1>
            <ProjectList projects={projects} />
        </div>
    );
};

export default ProjectPage;
