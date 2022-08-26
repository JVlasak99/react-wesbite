import "./Header.css";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";

function Header() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Montserrat"],
            },
        });
    });

    return (
        <>
            <div className="wrapper">
                <div className="nav-placement">
                    <Navbar />
                </div>
                    <h1 className="name-title">James Vlasak</h1>
                    <h4 className="title-subtitle">Full Stack Software Engineer</h4>
            </div>
        </>
    );
}

export default Header;
