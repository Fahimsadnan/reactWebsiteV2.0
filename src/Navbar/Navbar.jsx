import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/Logo.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="wrap">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                      
                                <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="img-fluid"/></a>
                             
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ml-auto">
                                        <NavLink activeClassName="nav_class" exact className="nav-link " to="/"><span>Home </span></NavLink>
                                        <NavLink activeClassName="nav_class" className="nav-link" to="About"><span>About </span></NavLink>
                                        <NavLink activeClassName="nav_class" className="nav-link" to="Service"><span> Service</span></NavLink>
                                        <NavLink activeClassName="nav_class" className="nav-link " to="Contact"><span> Contact</span></NavLink>
                                    </div>
                                </div>
                            
                            </nav>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar;