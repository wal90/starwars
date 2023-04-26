import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "../slices/filmSlice";


const store = configureStore({
    reducer:{
        films: filmSlice,
    }
})

export default store;