import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/sw_logoNav.png"
import s from "../../styles/navBar.module.css"

const NavBar = ()=>{
    return(
        <>
        <div>
           <nav>

            

            


            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={s.content}>
                <ul >
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/films"}>Films</NavLink></li>
                {/* <li><NavLink to={"/characters"}>Characters</NavLink></li> */}
                </ul>  
   


               
            </div>
           
        </nav> 
        </div>
        
        </>
    )
}

export default NavBar;