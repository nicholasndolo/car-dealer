import React from 'react';
import {  NavLink } from 'react-router-dom';
import NewVehicleForm from './NewVehicleForm';

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
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                        className="nav-link"
                        to="/"
                        exact
                        style={linkStyles}
                        activeStyles={{
                            background: "darkblue",
                        }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className="nav-link"
                        to="/about"
                        exact
                        style={linkStyles}
                        activeStyles={{ background: "darkblue" }}
                        >
                            NewVehicleForm
                    </NavLink>
                    </li>
                        <NavLink
                        className="nav-link"
                        to="/login"
                        exact
                        style={linkStyles}
                        activeStyles={{ background: "darkblue" }}
                        >
                            Login
                        </NavLink>
                    <li>

                    </li>

                
                </ul>
            </div>    
        </nav>
    )
}

export default NavBar;