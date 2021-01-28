import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Thewly</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink
                            exact
                            activeClassName="navbar__link--active"
                            className="navbar__link nav-link"
                            to="/">
                            Home
                        </NavLink>
                        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link nav-link"
                            to="/products">
                            Products
                        </NavLink>
                        {/* <a className="nav-link" href="#">Features</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="navbar__link--active"
                            className="navbar__link nav-link"
                            to="/contacts">
                            Contacts
                        </NavLink>
                        {/* <a className="nav-link" href="#">Pricing</a> */}
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </nav>
        {/* <nav className="navbar">
            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
            >
                Home
    </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/products"
            >
                Products
    </NavLink>

        </nav> */}

    </div>
);

export default Navbar;