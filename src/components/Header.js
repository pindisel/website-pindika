import React from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  function scrollWin() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="header">
      <LinkRouter
        to="/"
        onClick={() => {
          setOpen(false);
          scrollWin();
        }}
        className="logo-router"
      >
        <img className="logo" src={Logo} alt="aa" />
      </LinkRouter>
      <div className="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          className="hamburger-icon"
        />
      </div>
      <div className={isOpen ? "" : "hidden"}>
        <ul>
          <li className="header-list">
            <LinkRouter
              className="header-link underline-transition"
              to="/"
              onClick={() => {
                setOpen(false);
                scrollWin();
              }}
            >
              Home{" "}
            </LinkRouter>
          </li>
          <li className="header-list">
            {/* {pathname === "/" ? ( */}
            <Link
              className="header-link underline-transition"
              to="project"
              onClick={() => setOpen(false)}
            >
              Project{" "}
            </Link>
            {/* ) : (
              <LinkRouter
                className="header-link underline-transition"
                to="/"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Project{" "}
              </LinkRouter>
            )} */}
          </li>
          {/* <li className="header-list">
                        <a className="header-link underline-transition" href="https://medium.com/@anathapindika.m" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                            Blog
                        </a>
                    </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
