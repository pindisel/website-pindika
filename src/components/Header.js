import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "./Header.css";

const Header = () => {
    function scrollWin() {
        window.scrollTo(0, 0);
    }
    return (
        <div className="header">
            <ul>
                <li className="header-list">
                    <LinkRouter className="header-link underline-transition" to="/" onClick={scrollWin}>
                        Home{" "}
                    </LinkRouter>
                </li>
                <li className="header-list">
                    <LinkRouter className="header-link underline-transition" to="/project" onClick={scrollWin}>
                        Project{" "}
                    </LinkRouter>
                </li>
                <li className="header-list">
                    <a className="header-link underline-transition" href="https://medium.com/@anathapindika.m" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </li>
                {/* <li className="header-list">
                    <LinkRouter className="header-link underline-transition" to="/experience">
                        Experience{" "}
                    </LinkRouter>
                </li>
                <li className="header-list">
                    <LinkRouter className="header-link underline-transition" to="/achievement">
                        Achievement{" "}
                    </LinkRouter>
                </li> */}
            </ul>
        </div>
    );
};

export default Header;
