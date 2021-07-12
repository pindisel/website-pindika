import React, { useState } from "react";
import { projects } from "./data";

const ProjectPage = () => {
    return (
        <div>
            {projects.map((project) => (
                <div>{project.name}</div>
            ))}
        </div>
    );
};

export default ProjectPage;
