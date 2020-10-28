import React from 'react';
import { Link } from "react-router-dom";
import Logo from 'images/school.png';
const Navbar = () => {
    const styles = (theme) => ({
    styleObj: {
        fontSize: 26,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Kanit",
        fontWeight: 400,
    },
        link: {
            font: {
                size: 40,
                weight: 900,
            }}
    });
    return (
        <section className="hero is-info is-small">
            <div className="hero-head">
                <nav className="navbar is-fixed-top ">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item" style={styles.styleObj}>
                                <span className="icon mr-5"><i className="fas fa-street-view"></i></span>
                                  etapath
                            </Link>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body mt-5">
                <div className="container has-text-centered mt-5">
                    <h1 className="title" style={styles.link}>
                        The eastiest way to monitor and dispath
                    </h1>
                    <img src={Logo} height="200" width="200"/>
                </div>
            </div>
        </section>

    );
};

export default  Navbar;