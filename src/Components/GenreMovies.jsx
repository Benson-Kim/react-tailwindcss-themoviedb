<<<<<<< HEAD
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMovieGenre, resetGenre } from '../Features/Slices/genreSlice'
import Movie from './Movie'

const GenreMovies = () => {

    const params = useParams()
    let { genre } = params

    const url = `https://api.themoviedb.org/3/discover/movie/?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&with_genres=${genre}`

    const dispatch = useDispatch();
    const genremovies = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(resetGenre)
        axios.get(url)
            .then(res => dispatch(fetchMovieGenre(res.data.results)))
    }, [genre])

    return (
        <div className='flex flex-col bg-neutral-800'>
            <h1 className='h-5 text-slate-300 text-lg font-semibold font-mono m-5'>
                {genre}
            </h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-5 gap-x-3 gap-y-5 '>
                {genremovies ? genremovies.map((movie) => (
                    <Movie movie={movie} key={movie.id} />
                )) : 'Loading'}

            </div>
        </div>
    )
}

=======
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMovieGenre, resetGenre } from '../Features/Slices/genreSlice'
import Movie from './Movie'

const GenreMovies = () => {

    const params = useParams()
    let { genre } = params

    const url = `https://api.themoviedb.org/3/discover/movie/?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&with_genres=${genre}`

    const dispatch = useDispatch();
    const genremovies = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(resetGenre)
        axios.get(url)
            .then(res => dispatch(fetchMovieGenre(res.data.results)))
    }, [genre])

    return (
        <div className='flex flex-col bg-neutral-800'>
            <h1 className='h-5 text-slate-300 text-lg font-semibold font-mono m-5'>
                {genre}
            </h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-5 gap-x-3 gap-y-5 '>
                {genremovies ? genremovies.map((movie) => (
                    <Movie movie={movie} key={movie.id} />
                )) : 'Loading'}

            </div>
        </div>
    )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default GenreMovies