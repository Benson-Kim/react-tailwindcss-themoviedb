
import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: 'genre',
    initialState: [],
    reducers: {
        fetchMovieGenre: (state, { payload }) => {
            return state = payload
        },
        resetGenre: (state) => {
            return state = []
        },

    }
})

export const { fetchMovieGenre, searchMovie, resetGenre } = genreSlice.actions

export default genreSlice.reducer