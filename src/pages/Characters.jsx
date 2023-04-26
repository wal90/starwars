import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetail } from "../redux/slices/filmSlice";
import { useParams } from "react-router-dom";

const Characters = () =>{

    const dispatch = useDispatch();
  const characters = useSelector((state) => state.films.detail);

const { id } = useParams()
  useEffect(() => {
    dispatch( getDetail(id));
  }, [dispatch]);

    // console.log(getCha)


    return (
        <div>
       {characters.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
        </div>
    )
}

export default Characters;




