import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails, getEye } from "../redux/slices/filmSlice";
import CartCharacters from "../components/CartCharacters/CartCharacters";
 import { useParams } from "react-router-dom";
 import s from "../styles/characters.module.css"


const Characters = () =>{

    const dispatch = useDispatch();
  // const characters = useSelector((state) => state.films.detail);
  const characters= useSelector((state) => state.films.characters);
  const {id} = useParams() 
  const status = useSelector((state) => state.films.status);
  const error = useSelector((state) => state.films.error);

  // const [eyeData, setEyeData] = useState(characters)

  const handleFilter = (e) => {
    dispatch(getEye(e.target.value))
  }



  useEffect(() => {
    dispatch( getDetails(id));
    
  }, [dispatch, id]);

    // console.log(getCha)


    return (
        <div>


<div>
      <select onChange={e => handleFilter(e)}>
                                <option value="all">Filter By Eye Color</option>
                                <option value="brown">Brown</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                                <option value="black">Black</option>
                                <option value="orange">Orange</option>
                                <option value="red">Red</option>
                                <option value="hazel">Hazel</option>
                                <option value="unknown">Unknown</option>
                                <option value="blue-gray">Blue-gray</option>
                                <option value="gold">Gold</option>
                                <option value="green">Green</option>
                                <option value="pink">Pink</option>
                                <option value="red">Red</option>
                                <option value="white">White</option>


      </select>
   </div>
   <div className={s.allCardsCha}>
     {
        
        
        characters?.map((character, index) => {
          return(
            
            <div key={index}>
              
              <CartCharacters  name={character.name} eye_color={character.eye_color} gender={character.gender}/>
            </div>
          )
        })
 
        }
   </div>
  
      
       
  </div>
    )
}

export default Characters;




