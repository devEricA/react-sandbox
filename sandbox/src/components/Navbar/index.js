/*
    This page is responsible 
    for defining the navbar.
*/

import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';

//Defines the nav bar with 4 entries, Home, About, latestNews, and Signup
const Navbar = () => {
    return(
        <Nav>
            <NavMenu name = "MainNavMenu">
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/latestNews" activeStyle>
                    Latest News
                </NavLink>
                <NavLink to="/new-page" activeStyle>
                    New Page
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;