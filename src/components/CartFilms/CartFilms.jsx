import React, { useEffect} from "react";
import episode1 from "../../assets/episode1.jpg"
import episode2 from "../../assets/episode2.jpg"
import episode3 from "../../assets/episode3.jpg"
import episode4 from "../../assets/episode4.jpg"
import episode5 from "../../assets/episode5.jpg"
import episode6 from "../../assets/episode6.jpg"

import { Link } from "react-router-dom";
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


// const poster = [
//     {
//         id: 1,
//         poster: episode1
//     },
//     {
//         id: 2,
//         poster: episode2
//     },
//     {
//         id: 3,
//         poster: episode3
//     },
//     {
//         id: 4,
//         poster: episode4
//     },
//     {
//         id: 5,
//         poster: episode5
//     },
//     {
//         id: 6,
//         poster: episode6
//     }

// ]

const CartFilms = ({title, director, episode, url, id}) =>{


    return(
       
              
                            <div>
                                {/* <img src={id === episode ? poster : ""}  /> */}
                                <h2>{title}</h2>
                                <h5>Episode: {episode}</h5> 
                                <h6>Director: {director}</h6>
                                {/* <p>{characters./charactersmap(ch=>ch)}</p> */}
                                <Link to={`/characters/${id}` }><p>{url}</p></Link> 
                            </div>

    )
       
}



export default CartFilms;