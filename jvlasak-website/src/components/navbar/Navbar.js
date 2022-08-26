import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const linkStyle = {
    color: "#003049",
    fontFamily: "Montserrat",
    textDecoration: "none",
    padding: "20px",
    fontSize: '14px'
};

function Navbar() {

    const [hover, setHover] = useState()

    const hoverHandleIn = () => {
        setHover(true);
    };

    const hoverHandleOut = () => {
        setHover(false);
    }

    return (
        <>
            <div className="nav-wrapper">
                <nav className="nav-style">
                    <ul>
                        <button>
                            <Link to="/resume">
                                Resume
                            </Link>
                        </button>
                        <button>
                            <Link to="/aboutMe" style={linkStyle}>
                                About Me
                            </Link>
                        </button>
                        <button>
                            <Link to="/projects" style={linkStyle}>
                                Projects
                            </Link>
                        </button>
                        <button>
                            <Link to="/contactMe" style={linkStyle}>
                                Contact Me
                            </Link>
                        </button>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
