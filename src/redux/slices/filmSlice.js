import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    characters: [],
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
            const allFilms = action.payload.map((film)=>{
               const obteinFilmData = film;
               const dataFilm ={
               id: obteinFilmData.episode_id,
                title: obteinFilmData.title,
                episode: obteinFilmData.episode_id,
                director: obteinFilmData.director,
                // characters: obteinFilmData.characters,
                url: obteinFilmData.url,
                
                // characters: getCharacters()
               }
               return dataFilm
            })

            if(allFilms.length){
                state.list = allFilms
            }

            
        },
        getFilmsDetail( state, action) {
            const all = action.payload.map((film)=>{
               const obteinFilmData = film;
               const dataFilm ={
                characters: obteinFilmData.characters
                // characters: getCharacters()
               }
               return dataFilm
            })

            if(all.length){
                state.detail = all
            }

            
        },

        getAllCharacters(state, action){
            const allCha = action.payload
            if(allCha){
                state.characters = allCha
            }
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
          });
      },
})

export const { getFilms, getAllCharacters, getFilmsDetail } = filmSlice.actions;
export default filmSlice.reducer

export const  getAllFilms = (obj) => async(dispatch) =>{
    await axios.get("https://swapi.dev/api/films/", obj)
    .then((response) =>{
       dispatch( getFilms(response.data.results))
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

export const getDetails = createAsyncThunk('films/getDetails', async (id) => {
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    return response.data.characters;
  });




// export const getCharacters = (id) => async (dispatch) => {
//     try {
//       const response = await axios.get('https://swapi.dev/api/people/' + id);
//       dispatch(getAllCharacters(response.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchCharacterInfo = async (characterUrl) => {
//     await dispatch(fetchCharacterData(characterUrl));
//     const characterData = selectCharacterData(getState(), characterUrl);
//     return {
//       name: characterData.name,
//       eyeColor: characterData.eye_color,
//       gender: characterData.gender
//     };
//   };


// const getCharacters = async ()=>{

//     try {
//         const allUrl = await axios.get("https://swapi.dev/api/films/");
//         const allChar = await allUrl.data.results

//         const allCharacters = await allChar.map( cha =>{
//             return{
//                 characters: cha.characters
//             }
//         })

//         return allCharacters
        
//     } catch (error) {
//         return ({error: "Character not found" })
        
//     }

// }


// export const  getCharactersPerFilm = (obj) => async(dispatch) =>{
//     await axios.get("https://swapi.dev/api/films/", obj)
//     .then((response) =>{
//        dispatch( getCha(response.data.results.characters))
//        console.log(response.data.results.characters)
//     })
//     .catch((error)=> console.log(error))
// }





//  export const getCharacters = async () => {
//     const character =[]
//     const response = await axios.get("https://swapi.dev/api/films/")
//     const listCharacters = await response.data.results.characters
//     await Promise.all(listCharacters)

//     .then(()=>{
//         character.map(c =>{
//             return{
//                 name: c.name,
//                 eye: c.eye_color,
//                 gender: c.gender
//             }
//         })
//     }).catch((error)=>{
//         return error
//     })
//     return character
// }

// console.log(getCharacters());

// export const getCharacters = async () => {
//     const character =[]
//     const response = await axios.get("https://swapi.dev/api/films/")
//     const listCharacters = response.data.results.characters
//     await Promise.all(listCharacters)
//     .then((ch)=>{
//         character.push(ch.map(c =>{
//             return{
//                 name: c.name,
//                 eye: c.eye_color,
//                 gender: c.gender
//             }
//         }))
//     }).catch((error)=>{
//         return error
//     })
//     return character
// }