import React,{ useEffect} from "react";
import CartFilms from "../components/CartFilms/CartFilms";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms } from "../redux/slices/filmSlice";




const Films = () =>{

    const {list : films}= useSelector(state=> state.films)

    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllFilms(1));
    },[])

    

    return(
        <div>
            <div>
                {
                    films?.map((film, index) =>{
                        return (
                          <div key={index}>
                            <CartFilms title={film.title} episode={film.episode} director={film.director} url={film.url} characters={film.characters}/>

                            {/* characters={film.characters.map(ch=> ch)} */}
                           
                        </div>  
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Films;