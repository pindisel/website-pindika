import React, { useRef } from "react";
import Foto from "../assets/foto.png";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import "./HomePage.css";
import ProjectList from "./ProjectList";
import { projects } from "./project";

const HomePage = () => {
    const refProject = useRef(null);
    const scrollProject = () => refProject.current.scrollIntoView();

    const refAbout = useRef(null);
    const scrollAbout = () => refAbout.current.scrollIntoView();

    function scrollWin() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="homepage" id="homepage">
            <div className="homepage-1">
                <div className="homepage-foto">
                    <img src={Foto} alt="Foto Pindika" />
                </div>
                <div className="homepage-text">
                    <h1>
                        Yo! I’m <span className="homepage-pindika">Pindika!</span>
                    </h1>
                    <p>
                        My name is Anathapindika Muliawan. I’m an Undergraduate Student of Computer Engineering at University of Indonesia.
                        <br />
                        <span className="homepage-text-link" activeClass="active" onClick={scrollProject}>
                            Here
                        </span>{" "}
                        is some of my projects!
                        <br />
                        Learn more about me{" "}
                        <span className="homepage-text-link" activeClass="active" onClick={scrollAbout}>
                            here!
                        </span>
                    </p>
                </div>
            </div>
            <div className="homepage-2" ref={refProject} id="project">
                <h1>P R O J E C T</h1>
                <ProjectList projects={projects} />
            </div>
            <div className="homepage-3" ref={refAbout}>
                <h1>A B O U T&nbsp; M E</h1>
                <div className="aboutme-container">
                    <div className="aboutme-container-text">
                        <div className="aboutme-text">
                            <p>
                                My name is Anathapindika Muliawan. I'm a college student and a Wushu athlete for 12 years. I'm interested in Programming and Web Development. I love to make small projects to improve my skills. I work pretty
                                well as a team. I know C/C++ Programming language and Python. I use React.Js and CSS to make websites.
                            </p>
                        </div>
                        <div>
                            <p>Check out my socials!</p>
                        </div>
                        <div className="aboutme-icons">
                            <li>
                                <a href="https://instagram.com/pindika_kian" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineInstagram className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/anathapindika-muliawan-03173015b/" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineLinkedin className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:anathapindika.kian@gmail.com?subject=Hello Pindika!" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineMail className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/pindisel" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineGithub className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/pindika_kian" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineTwitter className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCkl0L6jsaaG2c-ytrfMtFrQ" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineYoutube className="icons" />
                                </a>
                            </li>
                        </div>
                    </div>
                    <div className="aboutme-container-photo">
                        <img src={Foto} alt="Foto Pindika" />
                    </div>
                </div>
            </div>
            <p className="top">
                <span className="homepage-text-link " activeClass="active" onClick={scrollWin}>
                    <IoIosArrowUp />
                    &nbsp;Back to top
                </span>
            </p>
        </div>
        //dsadasd
    );
};

export default HomePage;
