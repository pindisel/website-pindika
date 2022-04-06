import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./project";
import "./ProjectSingle.css";

const ProjectSingle = () => {
  const { name } = useParams();
  //   console.log(name);
  let project = projects.find(
    (projects) => projects.name === name.replaceAll("-", " ")
  );

  window.scrollTo(0, 0);
  //   window.location.reload();
  //   console.log(project);

  return (
    <div className="project-single">
      <h1>{project.name}</h1>
      {/* <img src={project.thumbnail}></img> */}
      <p>{project.desc}</p>
      <h3>Images</h3>
      {project.image.map((item, index) => (
        <div className="project-single-image">
          <img
            src={item}
            alt={project.name.replaceAll(" ", "") + (index + 1)}
          />
        </div>
      ))}
      <p className="project-single-link">
        Github Link: <br />
        <a href={project.link}>{project.link}</a>
      </p>
    </div>
  );
};

export default ProjectSingle;
