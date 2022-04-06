import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Link as LinkRouter } from "react-router-dom";
import "./HomePage.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectList = ({ projects }) => {
  let [slide, setSlide] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <BsArrowLeft />
      </div>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlide(next),
  };

  return (
    // <div className="project-container-1">
    //   <div className="wrapper">
    //     {projects.map((project, index) => {
    //       return (
    //         <div
    //           className={index === current ? "active" : "inactive"}
    //           key={index}
    //         >
    //           {index === current && (
    //             <div className="project-container-2">
    //               <h2 className="project-name">{project.name}</h2>
    //
    //               <img
    //                 src={project.image}
    //                 className="project-thumbnail"
    //                 alt={project.name}
    //               />
    //
    //             </div>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <div className="project-container-1">
      <div className="wrapper">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return (
              <div
                className={index === slide ? "slide active" : "slide"}
                key={index}
              >
                <div className="project-container-2">
                  <h2 className="project-name text">{project.name}</h2>
                  <LinkRouter
                    to={`/project/${project.name.replaceAll(" ", "-")}`}
                  >
                    <img
                      src={project.thumbnail}
                      className="project-thumbnail"
                      alt={project.name}
                    />
                  </LinkRouter>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectList;
