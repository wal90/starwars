import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/sw_logoNav.png"
import s from "./navBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";


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


    const menuRef = useRef(null);

    const menuToggle = () => menuRef.current.classList.toggle("active__menu")

    return(
        <>
        <div>
           <nav>

            

            


            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>

         
              <div className={s.content} >
                <ul ref={menuRef} onClick={menuToggle}>
                {
                            nav__links.map((item, index)=>(
                              <li key={index}>
                                <NavLink to={item.path}>{item.display}</NavLink>
                            </li>  
                            ))
                           }

                </ul> 
            </div>
             
            

           
            <div className={s.mobile__menu} onClick={menuToggle}> 
                        <GiHamburgerMenu/>     
            </div>
           
        </nav> 
        </div>
        
        </>
    )
}

export default NavBar;