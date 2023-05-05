import React, { useState } from "react";
import { NavLink } from "react-router-dom";
 import logo from "../../assets/image/sw_logoNav.png"
import "./navBar.css";



const nav__links =[
    {
        path: '',
        display:'Home'
    },
    {
        path: 'films',
        display:'Films'
    },
    {
        path: 'about',
        display:'About'
    }
]



    


const NavBar = ()=>{
const [isOpen, setIsOpen]=useState(false); 

    return(
        <>


<div className="navbar">
    <div className="nav_logo"> 

        <img src={logo} alt="logo" />
    </div>
    <div className={`nav_items ${isOpen && "open"}`}>

        <ul >
                {
                            nav__links.map((item, index)=>(
                              <li key={index}>
                                <NavLink to={item.path}>{item.display}</NavLink>
                            </li>  
                            ))
                           }
        </ul>  

    </div>
    <div className={` ${isOpen && "open"}`} onClick ={()=> setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>

</div>

        
        </>
    )
}

export default NavBar;

