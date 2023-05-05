import React from "react";
import "../styles/home.css"
import home from "../assets/image/home.png"
import app from "../assets/image/sw_home.png"
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div className="home__container">
            <div >
                <img src={home} alt="starWars" width={"100%"} />
            </div>
            <div className="text">
                <h3>WELCOME TO </h3>
                <img src={app} alt="starWars" width={"70%"} />
                <p>Where you can see descriptions of the movies and the characters</p>
                <Link to="/films"><button>See List</button></Link>
            </div>
        </div>
    )
}

export default Home;