<<<<<<< HEAD
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { getTrendingMovies } from '../Features/Slices/movieSlice'
import Movie from './Movie'
// import { Link } from 'react-router-dom'

const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d6ca859e565544668ce9853ec7cf1104'
const Movies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)

    useEffect(() => {
        axios.get(url)
            .then(res => dispatch(getTrendingMovies(res.data.results)))
    }, [])

    console.log(movies);
    return (
        <div className='flex flex-col bg-neutral-800'>
            <h1 className='h-5 text-slate-300 text-lg font-semibold font-mono m-5'>
                Discover
            </h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-5 gap-x-3 gap-y-5 '>
                {movies ? movies.map((movie) => (
                    <Movie movie={movie} key={movie.id} />
                )) : 'Loading'}
            </div>
        </div>
    )
}

=======
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { getTrendingMovies } from '../Features/Slices/movieSlice'
import Movie from './Movie'
// import { Link } from 'react-router-dom'

const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d6ca859e565544668ce9853ec7cf1104'
const Movies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)

    useEffect(() => {
        axios.get(url)
            .then(res => dispatch(getTrendingMovies(res.data.results)))
    }, [])

    console.log(movies);
    return (
        <div className='flex flex-col bg-neutral-800'>
            <h1 className='h-5 text-slate-300 text-lg font-semibold font-mono m-5'>
                Discover
            </h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mx-5 gap-x-3 gap-y-5 '>
                {movies ? movies.map((movie) => (
                    <Movie movie={movie} key={movie.id} />
                )) : 'Loading'}
            </div>
        </div>
    )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default Movies