import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="/">
                        Home{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="/project">
                        Project{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="/experience">
                        Experience{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link underline-transition" to="/achievement">
                        Achievement{" "}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
