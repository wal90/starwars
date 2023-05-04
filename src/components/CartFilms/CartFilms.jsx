import React, { useEffect} from "react";
import s from "../../styles/cartFilm.module.css"



import { Link } from "react-router-dom";
import {RiMovieFill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { getAllFilms  } from "../../redux/slices/filmSlice";
import { useDispatch, useSelector } from "react-redux";




const CartFilms = ({title, director, episode, url}) =>{
    

 const id = Number(url.split("/").slice(-2)[0]);

    return(
       
              
                            <div className={s.contain}>

                                {/* <img src={poster.id_film === episode ? poster.posterImg : ""}  /> */}
                                <h2>{title}</h2>
                                <p><RiMovieFill/> Episode: {episode}</p> 
                                <p><BsFillCameraReelsFill/> Director: {director}</p>
                                <Link to={"/characters/" + id }><button className={s.charBtn}>Characters</button></Link> 
                      
                                
                            </div>

    )
       
}



export default CartFilms;