<<<<<<< HEAD
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

=======
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

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default genreSlice.reducer