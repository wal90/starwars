import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails } from "../redux/slices/filmSlice";
import CartCharacters from "../components/CartCharacters/CartCharacters";
 import { useParams } from "react-router-dom";


const Characters = () =>{

    const dispatch = useDispatch();
  // const characters = useSelector((state) => state.films.detail);
  const characters= useSelector((state) => state.films.characters);
  const {id} = useParams() 
  const status = useSelector((state) => state.films.status);
  const error = useSelector((state) => state.films.error);
  // const id = Number(characters.url.split("/").slice(-2)[0]);
   
  useEffect(() => {
    dispatch( getDetails(id));
  }, [dispatch, id]);

    // console.log(getCha)


    return (
        <div>
       {/* {characters?.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))} */}

        {

        characters?.map((character, index) => {
          return(
            <div key={index}>
              <CartCharacters name={character.name} eye_color={character.eye_color} gender={character.gender}/>
            </div>
          )
        })
 
        }
        </div>
    )
}

export default Characters;




