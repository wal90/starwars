import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails } from "../redux/slices/filmSlice";
 import { useParams } from "react-router-dom";


const Characters = () =>{

    const dispatch = useDispatch();
  // const characters = useSelector((state) => state.films.detail);
  const characters= useSelector((state) => state.films.characters);
  const status = useSelector((state) => state.films.status);
  const error = useSelector((state) => state.films.error);
  const id = Number(Characters.url.split("/").slice(-2)[0])
   
  useEffect(() => {
    dispatch( getDetails(id));
  }, [dispatch, id]);

    // console.log(getCha)


    return (
        <div>
       {characters.map((character, id) => (
          <div key={id}>
            <h2>{character.name}</h2>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
        </div>
    )
}

export default Characters;




