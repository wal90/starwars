import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: [],
    characters: [],
    eyeFilter:"",
    gender:"",
    detail:[],
    data:[],
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
        selectGender: (state, action) => {
          state.gender = action.payload;
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
          .addCase(getData .pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(getData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
         
        
        

          
       
      },
})

export const { getFilms, getAllCharacters, getFilmsDetail, selectEyeColor, reset, selectGender} = filmSlice.actions;
export default filmSlice.reducer

export const  getAllFilms = (obj) => async(dispatch) =>{


  try {
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

    })
    .catch((error)=> console.log(error))
  } catch (error) {
    return ({error: "Film not found" })
  }
    
}

export const getData = createAsyncThunk('films/getData', async (id ) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
  return{
    nameMovie: response.data.title,
    episode: response.data.episode_id,
    director: response.data.director
  } 
  } catch (error) {
    return ({error: "Data film not found" })
  }
 

});


export const getDetails = createAsyncThunk('films/getDetails', async (id ) => {
  try {
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
  } catch (error) {
    return ({error: "Character not found" })
  }
  
  });



export const getColor = createAsyncThunk('films/getColor', async (id ) => {

  try {
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
  } catch (error) {
    return ({error: "Character eye color not found" })
  }
   
  });




  export const selectCharacters = (state) => {

    try {
      const { eyeFilter, gender } = state.films;
  
    if (eyeFilter && gender) {
      return state.films.characters.filter(
        (character) =>
          character.eye_color === eyeFilter && character.gender === gender
      );
    } else if (eyeFilter) {
      return state.films.characters.filter(
        (character) => character.eye_color === eyeFilter
      );
    } else if (gender) {
      return state.films.characters.filter(
        (character) => character.gender === gender
      );
    } else {
      return state.films.characters;
    }
    } catch (error) {
      return ({error: "Character gender not found" })
    }
    
  };




















