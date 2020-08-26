import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
        </ul>
    )
};

export default Nav;