<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Movies from './Movies'
import {searchMovie} from '../Features/Slices/genreSlice'

const Home = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    
    const searchurl = 'https://api.themoviedb.org/3/search/multi?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&page=1&include_adult=false';
   
    useEffect(() => {
        axios.get(searchurl)
            .then(res => dispatch(searchMovie(res.data.results, serachtext)))
    }, [movies])

    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex '>
                <Sidebar className='bg-slate-600' />
                <Movies />
            </div>
        </div>
    )
}

=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Movies from './Movies'
import {searchMovie} from '../Features/Slices/genreSlice'

const Home = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    
    const searchurl = 'https://api.themoviedb.org/3/search/multi?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&page=1&include_adult=false';
   
    useEffect(() => {
        axios.get(searchurl)
            .then(res => dispatch(searchMovie(res.data.results, serachtext)))
    }, [movies])

    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex '>
                <Sidebar className='bg-slate-600' />
                <Movies />
            </div>
        </div>
    )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default Home