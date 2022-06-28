
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
export const { getTrendingMovies, getMovieByGenre, getMovieById } = movieSlice.actions