import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li className="header-list">
                    <Link className="header-link" to="/achievement">
                        Achievement{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link" to="/experience">
                        Experience{" "}
                    </Link>
                </li>

                <li className="header-list">
                    <Link className="header-link" to="/project">
                        Project{" "}
                    </Link>
                </li>
                <li className="header-list">
                    <Link className="header-link" to="/">
                        Home{" "}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
