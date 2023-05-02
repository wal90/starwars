import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    characters: [],
    eyeFilter:"",
    detail:[],
    film: null, 
    status: 'idle', 
    error: null
}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers:{
        reset(state){
          state.status =  'idle',
          state.eyeFilter = '',
          state.error  = null,
          state.characters = ''
        },
        getFilms( state, action) {
            const allFilms = action.payload
            if(allFilms.length){
                state.list = allFilms
            }
        },
        getAllCharacters(state, action){
            const allCha = action.payload
            if(allCha){
                state.characters = allCha
            }
        },
        selectEyeColor: (state, action) => {
          state.eyeFilter = action.payload;
        },

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
         
        
        

          
       
      },
})

export const { getFilms, getAllCharacters, getFilmsDetail, selectEyeColor, reset} = filmSlice.actions;
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



export const getColor = createAsyncThunk('films/getColor', async (id ) => {
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    const charactersUrls =  response.data.characters;
    const allCharacters =  await Promise.all(
        charactersUrls.map(async (characterUrl) => {
          const characterDetail = await axios.get(characterUrl);
          return {
            eye_color: characterDetail.data.eye_color
          }
        }))
        
    return allCharacters
  });


  export const selectCharacters = (state) => {
    if (state.films.eyeFilter) {
      return state.films.characters.filter(
        (character) => character.eye_color === state.films.eyeFilter
      );
    }
    return state.films.characters;
  };