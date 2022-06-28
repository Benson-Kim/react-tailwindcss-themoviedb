
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice";
import genreReducer from './Slices/genreSlice'

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
})

export default store