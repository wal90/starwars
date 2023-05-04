import React,{ useEffect} from "react";
import CartFilms from "../components/CartFilms/CartFilms";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms } from "../redux/slices/filmSlice";
import s from "../styles/cartsFilm.module.css"
import Loading from "../components/Loading/Loading";




const Films = () =>{

    const {list : films}= useSelector(state=> state.films)

    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllFilms(1));
    },[])

    

    return(
        <div>

            {

                films.length ?

                <div className={s.allCards}>
                {   

                    
                    films?.map((film, index) =>{
                        return (
                          <div key={index}>
                            <CartFilms image={film.image} title={film.title} episode={film.episode} director={film.director} url={film.url} characters={film.characters}/>

                           
                        </div>  
                        )
                    })
                    
                }
            </div> :
            <div>
                <Loading></Loading>
            </div>

            }
            

        </div>
    )
}


export default Films;