import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top is-info">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                    </a>
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
                            Examples
                        </a>
                        <a className="navbar-item">
                            Documentation
                        </a>
                        <span className="navbar-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default  Navbar;