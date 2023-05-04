import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails, selectEyeColor, selectCharacters, selectGender, getData} from "../redux/slices/filmSlice";
import CartCharacters from "../components/CartCharacters/CartCharacters";
import charact  from "../assets/image/characters.png";
 import { useParams } from "react-router-dom";
 import s from "../styles/characters.module.css"
 import Loading from "../components/Loading/Loading.jsx";
 import { Link } from "react-router-dom";
 import { IoChevronBackOutline} from "react-icons/io5";


const Characters = () =>{

    const dispatch = useDispatch();
  // const characters= useSelector((state) => state.films.characters);
  const characters = useSelector(selectCharacters);
  const film = useSelector((state) => state.films.data);

  const {id} = useParams() 

useEffect(()=>{
  dispatch(getData(id))
}, [dispatch])

  useEffect(() => {
    
    dispatch( getDetails(id)); 
  }, [dispatch, id]);


    const handleEyeColorChange = (event) => {
      dispatch(selectEyeColor(event.target.value));
    };

    const handleGender = (event) => {
      dispatch(selectGender(event.target.value));
    };

    return (
        <div >

          <div  className={s.description}> 
            <h1>{film.nameMovie}</h1>
            <p>Director: {film.director}</p>
            <p>Episode: {film.episode}</p>

           <Link to="/films">  <button> <IoChevronBackOutline/> Back</button></Link>
          </div>

        
<div className={s.filter}>
  <div>

   

     

      
      <select  onChange={handleEyeColorChange}>
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
   <div>
    <select onChange={handleGender}> 
      <option value="">Filter By Gender</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="hermaphrodite">Hermaphrodite</option>
      <option value="n/a">Unknown</option>
      <option value="none">None</option>
    </select>
   </div>
</div>




{

  characters.length ?

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
</div> :

   <div >
    <Loading></Loading>   

   </div>
  
  
}
 





   
      
       
  </div>
    )
}

export default Characters;




