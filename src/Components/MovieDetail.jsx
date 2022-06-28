<<<<<<< HEAD
import React, { useEffect } from 'react'
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getMovieById } from '../Features/Slices/movieSlice'

const MovieDetail = () => {

    const params = useParams();
    let { movie } = params

    const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US`

    const dispatch = useDispatch();
    const singlemovie = useSelector(state => state.movies)
    // console.log(singlemovie);

    useEffect(() => {
        axios.get(url)
            .then(res => dispatch(getMovieById(res.data)))
    }, [movie])

    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "min ";
    }

    return (
        <article className='bg-neutral-800 inset-2 text-neutral-300 '>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2' >
                <div className='p-10 mx-auto my-6'>
                    <img src={"https://image.tmdb.org/t/p/w500/" + singlemovie?.poster_path} alt={singlemovie?.title} className="w-full h-min" />
                </div>
                <div className='p-10 mx-auto my-6'>
                    <span className='flex justify-between items-center my-3'>
                        <h1 className='text-2xl font-semibold'>{singlemovie?.title}</h1>
                        <h2 className='text-xl flex items-center gap-x-1'>
                            {singlemovie?.vote_average}
                            <BsStarFill className='text-base text-yellow-300' />
                        </h2>
                    </span>
                    <span className='flex items-center gap-x-2 mb-3 pl-1 text-sm'>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>{singlemovie?.release_date}</h2>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>{timeConvert(singlemovie?.runtime)}</h2>
                    </span>
                    <p className='leading-loose my-3 px-1 '>
                        {singlemovie?.overview}
                    </p>

                    <span className='flex items-center gap-x-4 my-3'>
                        <h1 className='w-24 text-neutral-500'>Vote count:</h1>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>
                            {singlemovie?.vote_count}
                        </h2>
                    </span>
                    {/* <span className='flex items-center gap-x-4 my-3'>
                        <h1 className='w-24 text-neutral-500'>Genre</h1>
                        {singlemovie?.genres.map(genre => (
                            <h2 key={genre.id} className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>
                                {genre.name}
                            </h2>
                        ))}
                    </span> */}

                </div>
            </div>
        </article>
    )
}

=======
import React, { useEffect } from 'react'
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getMovieById } from '../Features/Slices/movieSlice'

const MovieDetail = () => {

    const params = useParams();
    let { movie } = params

    const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US`

    const dispatch = useDispatch();
    const singlemovie = useSelector(state => state.movies)
    // console.log(singlemovie);

    useEffect(() => {
        axios.get(url)
            .then(res => dispatch(getMovieById(res.data)))
    }, [movie])

    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "min ";
    }

    return (
        <article className='bg-neutral-800 inset-2 text-neutral-300 '>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2' >
                <div className='p-10 mx-auto my-6'>
                    <img src={"https://image.tmdb.org/t/p/w500/" + singlemovie?.poster_path} alt={singlemovie?.title} className="w-full h-min" />
                </div>
                <div className='p-10 mx-auto my-6'>
                    <span className='flex justify-between items-center my-3'>
                        <h1 className='text-2xl font-semibold'>{singlemovie?.title}</h1>
                        <h2 className='text-xl flex items-center gap-x-1'>
                            {singlemovie?.vote_average}
                            <BsStarFill className='text-base text-yellow-300' />
                        </h2>
                    </span>
                    <span className='flex items-center gap-x-2 mb-3 pl-1 text-sm'>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>{singlemovie?.release_date}</h2>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>{timeConvert(singlemovie?.runtime)}</h2>
                    </span>
                    <p className='leading-loose my-3 px-1 '>
                        {singlemovie?.overview}
                    </p>

                    <span className='flex items-center gap-x-4 my-3'>
                        <h1 className='w-24 text-neutral-500'>Vote count:</h1>
                        <h2 className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>
                            {singlemovie?.vote_count}
                        </h2>
                    </span>
                    {/* <span className='flex items-center gap-x-4 my-3'>
                        <h1 className='w-24 text-neutral-500'>Genre</h1>
                        {singlemovie?.genres.map(genre => (
                            <h2 key={genre.id} className='border rounded-full text-sm bg-indigo-600 py-1 px-2 border-neutral-400'>
                                {genre.name}
                            </h2>
                        ))}
                    </span> */}

                </div>
            </div>
        </article>
    )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default MovieDetail