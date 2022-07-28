import React from 'react';
import {  NavLink } from 'react-router-dom';

function NavBar (){
    
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    return (
        <nav>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyles={{
                    background: "darkblue",
                }}
            >
                    Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyles={{ background: "darkblue" }}
                >
                    About
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyles={{ background: "darkblue" }}
            >
                    Login
            </NavLink>
        </nav>
    )
}

export default NavBar;