import React from "react";
import Foto from "../assets/foto.png";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
import "./HomePage.css";
import ProjectList from "./ProjectList";
import { projects } from "./data";

const HomePage = () => {
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
                        My name is Anathapindika Muliawan. I’m an Undergraduate Student of Computer Engineering at University of Indonesia. More about me{" "}
                        <LinkScroll className="homepage-text-link" activeClass="active" to="aboutme" spy={true} smooth={true}>
                            here!
                        </LinkScroll>
                    </p>
                </div>
            </div>
            <div className="homepage-2" id="project">
                <h1>P R O J E C T</h1>
                <ProjectList projects={projects} />
            </div>
            <div className="homepage-3" id="aboutme">
                <h1>A B O U T&nbsp; M E</h1>
                <div className="aboutme-container">
                    <div className="aboutme-container-text">
                        <div className="aboutme-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
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
        </div>
    );
};

export default HomePage;
