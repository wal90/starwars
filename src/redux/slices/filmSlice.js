import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    characters: [],
    eyeFilter:[],
    detail:[],
    film: null, 
    status: 'idle', 
    error: null
}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers:{
        getFilms( state, action) {
            const allFilms = action.payload
            
            
            // .map((film)=>{
            //    const obteinFilmData = film;
            //    const dataFilm ={
            //    id: obteinFilmData.episode_id,
            //     title: obteinFilmData.title,
            //     episode: obteinFilmData.episode_id,
            //     director: obteinFilmData.director,
            //     // characters: obteinFilmData.characters,
            //     url: obteinFilmData.url,
                
            //     // characters: getCharacters()
            //    }
            //    return dataFilm
            // })

            if(allFilms.length){
                state.list = allFilms
            }

            
        },
        // getFilmsDetail( state, action) {
        //     const all = action.payload.map((film)=>{
        //        const obteinFilmData = film;
        //        const dataFilm ={
        //         characters: obteinFilmData.characters.map((ch=>{
        //             return{
        //                 name: ch.name,
        //                 eye_color: ch.eye_color,
        //                 gender: ch.gender
        //             }
        //         }))
        //         // characters: getCharacters()
        //        }
        //        return dataFilm
        //     })

        //     if(all.length){
        //         state.detail = all
        //     }

            
        // },

        getAllCharacters(state, action){
            const allCha = action.payload
            if(allCha){
                state.characters = allCha
            }
        },
        getEye(state, action){
          const eyeColor = action.payload;
          return state.filter((character) => character.eye_color === eyeColor);
        }




    }, extraReducers: (builder) => {
        builder
          .addCase(getDetails .pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getDetails.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.characters = action.payload;
          })
          .addCase(getDetails.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(filterByColor.pending, (state) => {
            state.status = "loading";
          })
          .addCase(filterByColor.fulfilled, (state, action) => {
            // state.status = "succeeded";
            // state.characters = action.payload;

            state.filter = action.payload;
            if (action.payload === null) {
              state.eyeFilter = state.data;
            } else {
              state.eyeFilter = state.data.map((film) => ({
                ...film,
                eyeFilter: film.characters.filter(
                  (character) => character.eye_color === action.payload
                ),
              }));
            }



            // const eyeColor = action.payload;
            // return state.map((film) => ({
            //   ...film,
            //   characters: film.characters.filter((character) => character.eye_color === eyeColor),
            // }));

            // const eyeColor = state.filterByColor 


           
            // const eyesFiltered = action.payload === "all" ? eyeColor : eyeColor.filter(s => s.characters.find(f=> f.eye_color === action.payload))
            // console.log(eyesFiltered) 
           
            // state.filterByColor = eyesFiltered              
            
          })
          .addCase(filterByColor.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
      },
})

export const { getFilms, getAllCharacters, getFilmsDetail, getEye } = filmSlice.actions;
export default filmSlice.reducer

export const  getAllFilms = (obj) => async(dispatch) =>{
    await axios.get("https://swapi.dev/api/films/", obj)
    .then((response) =>{
       dispatch( getFilms(response.data.results.map(r=>{
        return{
            title:r.title,
            episode: r.episode_id,
            director: r.director,
            url: r.url,

        }
       })))
        // dispatch(getAllCharacters(response.data.results.map(cha=> cha.url)));
    })
    .catch((error)=> console.log(error))
}

// export const  getDetail= (id) => async(dispatch) =>{
//     await axios.get('https://swapi.dev/api/films/' + id)
//     .then((response) =>{
//     dispatch( getFilmsDetail(response.data))
//     // dispatch(getAllCharacters(response.data.map(cha=> cha.characters)));
//     })
//     .catch((error)=> console.log(error))
// }

export const getDetails = createAsyncThunk('films/getDetails', async (id ) => {
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    const charactersUrls =  response.data.characters;
    const allCharacters =  await Promise.all(
        charactersUrls.map(async (characterUrl) => {
          const characterDetail = await axios.get(characterUrl);
          return {
            name: characterDetail.data.name,
            eye_color: characterDetail.data.eye_color,
            gender: characterDetail.data.gender,
          }
        
          
       
        }))
        
    return allCharacters
  });





  export const filterByColor = createAsyncThunk('films/filterByColor', async (eyeColor) => {
    // const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    // const characters =  response.data.characters.map(e=>{
    //   return {
    //             eye_color: characters.data.eye_color,
    //           }
    // });


    ///////////ver///////////////////////////////////

    const response = await axios.get("https://swapi.dev/api/people/", {
      params: {
        search: "",
        eye_color: eyeColor,
      },
    });


    ////////////////////////////////////////


    // const response = await axios.get("https://swapi.dev/api/people/");
    // const color = response.data.characters.map(c =>{
    //   return{
    //     eye_color: c.eye_color
    //   }
    // })









    // return response.data.results;


    // const allCharacters =  await Promise.all(
    //     charactersUrls.map(async (characterUrl) => {
    //       const characterDetail = await axios.get(characterUrl);
    //       return {
    //         eye_color: characterDetail.data.eye_color,
    //       }
        
          
       
    //     }))

    return response

 
        
    // return response.data.results
  });

















