<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getTrendingMovies: (state, { payload }) => {
            return state = payload
        },
        getMovieByGenre: (state, genreID) => {
            return { ...state, movies: genreID.payload }
        },
        getMovieById: (state, { payload }) => {
            return state = payload
        }
    }
})

export default movieSlice.reducer
=======
import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getTrendingMovies: (state, { payload }) => {
            return state = payload
        },
        getMovieByGenre: (state, genreID) => {
            return { ...state, movies: genreID.payload }
        },
        getMovieById: (state, { payload }) => {
            return state = payload
        }
    }
})

export default movieSlice.reducer
>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export const { getTrendingMovies, getMovieByGenre, getMovieById } = movieSlice.actions