import React from "react";
import "../styles/about.css"
import about from "../assets/image/about.png"
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin, BsInstagram, BsWhatsapp  } from 'react-icons/bs';
import { TfiWorld} from "react-icons/tfi";



const About = () =>{
    return (
        <div className="about__container">
           
            <div className="text">
                <p>Star Wars App By</p>
                <h1>WALTER MARTINEZ</h1>
                
                <h5>Full Stack Developer - Graphic designer</h5>
                <div className="socials">
                <a href="https://www.linkedin.com/in/walter-martinez-71024529/" target= "_blank" rel="noreferrer"><BsLinkedin/></a>
                <a href="https://github.com/wal90" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
                <a href="https://www.instagram.com/walteromartinez/" target="_blank" rel="noreferrer"><BsInstagram/></a>
                <a href="https://wa.me/+5491165821157" target='_blank' rel="noreferrer"> <BsWhatsapp className='contact__option-icon'/></a>
                <a href="https://walter-martinez-portfolio.vercel.app/" target='_blank' rel="noreferrer"> <TfiWorld className='contact__option-icon'/></a>
                </div>
            </div>
            <div >
                <img src={about} alt="starWars" width={"100%"} />
            </div>

        </div>
    )
}

export default About;