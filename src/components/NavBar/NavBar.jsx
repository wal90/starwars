import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
        <nav>
            <ul>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                <li><NavLink to={"/films"}>Films</NavLink></li>
                <li><NavLink to={"/characters"}>Characters</NavLink></li>
            </ul>
            </nav>
        </>
    )
}

export default NavBar;