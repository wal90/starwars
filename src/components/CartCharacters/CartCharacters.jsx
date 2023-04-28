import React from "react";





const CartCharacters = ({name, eye_color, gender}) =>{


    return(
       
              
                            <div>
                                {/* <img src={id === episode ? poster : ""}  /> */}
                                <h2>{name}</h2>
                                <h5>{eye_color}</h5>
                                <h5>{gender}</h5>
                                {/* <h5>Episode: {episode}</h5> 
                                <h6>Director: {director}</h6> */}
                                {/* <p>{characters./charactersmap(ch=>ch)}</p> */}
                               
                            </div>

    )
       
}



export default CartCharacters;