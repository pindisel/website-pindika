import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";

const ProjectList = ({ projects }) => {
    let [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextProject = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevProject = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="project-container-1">
            <div className="arrow-wrapper">
                <BsArrowLeft onClick={prevProject} className="arrow" />
            </div>
            <div className="wrapper">
                {projects.map((project, index) => {
                    return (
                        <div className={index === current ? "active" : "inactive"} key={index}>
                            {index === current && (
                                <div className="project-container-2">
                                    <h2 className="project-name">{project.name}</h2>
                                    <LinkRouter to={`/project/${project.id}`}>
                                        <img src={project.image} className="project-thumbnail" alt={project.name} />
                                    </LinkRouter>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="arrow-wrapper">
                <BsArrowRight onClick={nextProject} className="arrow" />
            </div>
        </div>
    );
};

export default ProjectList;
