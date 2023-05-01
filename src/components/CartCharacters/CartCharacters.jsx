import React from "react";
import { FaRegEye } from "react-icons/fa";
import { SiMicrogenetics } from "react-icons/si";
import s from "../../styles/cartChar.module.css"






const CartCharacters = ({name, eye_color, gender}) =>{


    return(
       
              
                            <div className={s.containCha}>
                        
                                <h2>{name}</h2>
                                <div className={s.containTextC}>
                                   <p> <FaRegEye/> Eye Color: {eye_color}</p>
                                    <p> <SiMicrogenetics/> Gender: {gender}</p> 
                                </div>
                                
                          
                               
                            </div>

    )
       
}



export default CartCharacters;