import React, { useEffect} from "react";
import s from "../../styles/cartFilm.module.css"
import episode1 from "../../assets/episode1.jpg"
import episode2 from "../../assets/episode2.jpg"
import episode3 from "../../assets/episode3.jpg"
import episode4 from "../../assets/episode4.jpg"
import episode5 from "../../assets/episode5.jpg"
import episode6 from "../../assets/episode6.jpg"

import { Link } from "react-router-dom";
import {RiMovieFill } from "react-icons/ri";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { getAllFilms } from "../../redux/slices/filmSlice";
import { useDispatch, useSelector } from "react-redux";

// const CartFilms = () =>{

//     const {list : films}= useSelector(state=> state.films)

//     const dispatch = useDispatch()
//     useEffect(()=>{
//        dispatch(getAllFilms());
//     },[])

//     return(
//         <div>
//             <div>
//                 {
//                     films.map((film, index) =>{
//                         <div key={index}>
//                             <div>
//                                 <h2>{film.title}</h2>
//                                 <h5>{film.episode_id}</h5>
//                                 <h6>{film.director}</h6>
//                             </div>

//                         </div>
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

const poster = [
        {
            id_film: 1,
            posterImg: episode1
        },
        {
            id_film: 2,
            posterImg: episode2
        },
        {
            id_film: 3,
            posterImg: episode3
        },
        {
            id_film: 4,
            posterImg: episode4
        },
        {
            id_film: 5,
            posterImg: episode5
        },
        {
            id_film: 6,
            posterImg: episode6
        }
    
    ]



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