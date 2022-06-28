<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice";
import genreReducer from './Slices/genreSlice'

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
     }
 })

=======
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice";
import genreReducer from './Slices/genreSlice'

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
     }
 })

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
 export default store