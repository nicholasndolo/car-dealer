import React from 'react';
import {  NavLink } from 'react-router-dom';
import NewVehicleForm from './NewVehicleForm';

function NavBar (){
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                        <NavLink
                        className="nav-link"
                        to="/"
                        exact
                        >
                           <h3>Home</h3>
                        </NavLink>
                        <NavLink
                        className="nav-link"
                        to="/newvehicleform"
                        exact
                        >
                            <h3>Post Vehicle</h3>
                    </NavLink>
    

        </nav>
    )}

export default NavBar;
