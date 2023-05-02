import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails, selectEyeColor, selectCharacters } from "../redux/slices/filmSlice";
import CartCharacters from "../components/CartCharacters/CartCharacters";
 import { useParams } from "react-router-dom";
 import s from "../styles/characters.module.css"


const Characters = () =>{

    const dispatch = useDispatch();
  // const characters = useSelector((state) => state.films.detail);
  const characters= useSelector((state) => state.films.characters);

  const {id} = useParams() 



  const eye_color = ["brown", "blue", "yellow", "black", "orange", "red", "hazel", "unknown", "blue-gray", "gold", "green", "pink", "red", "white"]
  const [filterEye, setFilterEye] = useState("")
  const [displayDropDown, setDisplayDropDown] = useState(false)

  // const character = useSelector(selectCharacters);
  // useEffect(() =>{
  //   if (filterEye !== ""){
  //     dispatch(selectEyeColor(filterEye.toLowerCase()))
  //   }
  // })

  // const handleDropDown = () =>{
  //   setDisplayDropDown(!displayDropDown)
  // }


  useEffect(() => {
    dispatch( getDetails(id));
    // if(selectedEyeColor){
    //   dispatch(setFilterEye(eye_color))
    // }
    // if (filterEye !== ""){
    //   dispatch(selectEyeColor(filterEye.toLowerCase()))
    // }
    // return () =>{
    //   dispatch(reset())
    // }
    
  }, [dispatch, id]);


  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     const responses = await Promise.all(
  //       charactersUrls.map((url) => fetch(url).then((response) => response.json()))
  //     );
  //     dispatch(setCharacters(responses));
  //   };

  //   fetchCharacters();
  // }, [dispatch]);

  // const handleSelectEyeColor = (event) => {
  //   dispatch(selectEyeColor(event.target.value));
  // };

  // const filteredCharacters = selectedEyeColor
  //   ? characters.filter((character) => character.eye_color === selectedEyeColor)
  //   : characters;

    // console.log(getCha)
    const handleEyeColorChange = (event) => {
      dispatch(selectEyeColor(event.target.value));
    };

    return (
        <div>

        


<div>
      <select  onChange={handleEyeColorChange  }>
                                <option value="">Filter By Eye Color</option>
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




