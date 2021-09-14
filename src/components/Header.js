import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
    function scrollWin() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="header">
            <ul>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="/" onClick={scrollWin}>
                        Home{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="#project">
                        Project{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <a className="header-link underline-transition" href="https://medium.com/@anathapindika.m" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
