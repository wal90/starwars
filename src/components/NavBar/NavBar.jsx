import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/sw_logoNav.png"
import s from "../../styles/navBar.module.css"


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
    return(
        <>
        <div>
           <nav>

            

            


            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={s.content}>
                <ul >
                {
                            nav__links.map((item, index)=>(
                              <li key={index}>
                                <NavLink to={item.path}>{item.display}</NavLink>
                            </li>  
                            ))
                           }

                {/* <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/films"}>Films</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li> */}
               


                </ul>  
   


               
            </div>
           
        </nav> 
        </div>
        
        </>
    )
}

export default NavBar;