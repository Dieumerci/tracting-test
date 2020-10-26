import React from 'react';
import { Link } from "react-router-dom";
import Logo from 'images/school.png';
import Home from '../home/Home';
const Navbar = () => {
    const styleObj = {
        fontSize: 26,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Kanit",
        fontWeight: 400,

    }
    return (
        <section className="hero is-info is-small">
            <div className="hero-head">
                <nav className="navbar is-fixed-top ">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item" style={styleObj}>

                                <span className="icon pr-5"><i className="fas fa-street-view"></i></span>
                                  etapath</Link>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                        </div>
                        <div id="navbarMenuHeroB" className="navbar-menu">
                            <div className="navbar-end">
                                <Link to="/" className="navbar-item">Home</Link>
                                <a className="navbar-item">
                                    Dataset
                                </a>
                                <a className="navbar-item">
                                    Tracker
                                </a>
                                <span className="navbar-item">
                      <a className="button is-info is-inverted">
                        <span className="icon">
                              <i className="fas fa-sign-in-alt"></i>
                            </span>
                            <span>Login</span>
                          </a>
                        </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <div class="hero-body mt-5">
                <div class="container has-text-centered mt-5">
                    <h1 class="title">
                        The eastiest way to monitor and dispath
                    </h1>

                    <img src={Logo} height="200" width="200"/>
                </div>
            </div>


        </section>

    );
};

export default  Navbar;