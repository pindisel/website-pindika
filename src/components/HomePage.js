import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Foto from "../assets/foto.png";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import "./HomePage.css";
import ProjectList from "./ProjectList";
import { projects } from "./project";

const HomePage = (props) => {
  console.log(props);
  function scrollWin() {
    window.scrollTo(0, 0);
  }

  // const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  // const updateMedia = () => {
  //     setDesktop(window.innerWidth > 900);
  // };

  // useEffect(() => {
  //     window.addEventListener("resize", updateMedia);
  //     return () => window.removeEventListener("resize", updateMedia);
  // });

  const aboutmeText =
    "My name is Anathapindika Muliawan. I am a Computer Engineering student at the University of Indonesia. I am interested in programming and frontend development for websites and android applications. I can work well in a team and I am eager to learn and improve my knowledge around programming.\nI am also a Wushu athlete for 12 years. I am currently part of the Kota Bogor Wushu team.";

  // const [isReadMore, setIsReadMore] = useState(true);

  // const toggleReadMore = () => {
  //     setIsReadMore(!isReadMore);
  //};

  return (
    <div className="homepage" id="homepage">
      <div className="homepage-1">
        <div className="homepage-foto">
          <img src={Foto} alt="Foto Pindika" />
        </div>
        <div className="homepage-text text">
          <h1>
            Yo! I’m <span className="homepage-pindika">Pindika!</span>
          </h1>
          <p>
            My name is Anathapindika Muliawan. I’m an Undergraduate Student of
            Computer Engineering at University of Indonesia.
            <br />
            <Link
              className="homepage-text-link"
              activeClass="active"
              to="project"
            >
              Here
            </Link>{" "}
            is some of my projects!
            <br />
            Learn more about me{" "}
            <Link
              className="homepage-text-link"
              activeClass="active"
              to="aboutme"
            >
              here!
            </Link>
          </p>
        </div>
      </div>
      <div className="homepage-2" id="project">
        <h1 className="text">P R O J E C T</h1>
        <ProjectList projects={projects} />
      </div>
      <div className="homepage-3" id="aboutme">
        <h1 className="text">A B O U T&nbsp; M E</h1>
        <div className="aboutme-container">
          <div className="aboutme-container-text">
            <div className="aboutme-text text">
              <p>
                {aboutmeText}
                {/* {isDesktop ? <div>aaa</div> : [isReadMore ? aboutmeText.slice(0, 150) : <p>{aboutmeText}</p>]}

                                {isDesktop ? [isReadMore ? aboutmeText.slice(0, 150) : <p>{aboutmeText}</p>
                                <span onClick={toggleReadMore} className="read-or-hide">
                                    {isReadMore ? "...read more" : " show less"}
                                </span>] : <div>aaa</div>} */}
              </p>
            </div>
            <div className="text">
              <p>Check out my socials!</p>
            </div>
            <div className="aboutme-icons">
              <li>
                <a
                  href="https://instagram.com/pindika_kian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram className="icons" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anathapindika-muliawan-03173015b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin className="icons" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:anathapindika.kian@gmail.com?subject=Hello Pindika!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail className="icons" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pindisel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="icons" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/pindika_kian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter className="icons" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCkl0L6jsaaG2c-ytrfMtFrQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        <span
          className="homepage-text-link "
          activeClass="active"
          onClick={scrollWin}
        >
          <IoIosArrowUp />
          &nbsp;Back to top
        </span>
      </p>
    </div>
  );
};

export default HomePage;
