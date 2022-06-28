<<<<<<< HEAD
import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    const getStars = (rating) => {
        rating = Math.round(rating / 2);
        let output = [];

        for (var i = rating; i >= 1; i--)
            output.push(<BsStarFill className='text-yellow-400  ' />);
        if (i == .5) output.push(<BsStarHalf className='text-yellow-400' />);

        for (let j = (5 - rating); j >= 1; j--)
            output.push(<BsStar className='text-yellow-400' />);

        return output
    }

    return (
        <Link to={`/movieid=${movie.id}`} className=' p-2 rounded hover:border-lime-100 items-center '>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title}
                className='h-48 w-full rounded' />
            <div className='w-full text-sm py-2'>
                <p className='text-slate-200'>{movie.title}</p>
                <span className='flex justify-between items-center'>
                    <p className='flex items-center gap-1 text-yellow-400'>{getStars(movie.vote_average)}</p>
                </span>
            </div>
        </Link>
    )
}

=======
import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    const getStars = (rating) => {
        rating = Math.round(rating / 2);
        let output = [];

        for (var i = rating; i >= 1; i--)
            output.push(<BsStarFill className='text-yellow-400  ' />);
        if (i == .5) output.push(<BsStarHalf className='text-yellow-400' />);

        for (let j = (5 - rating); j >= 1; j--)
            output.push(<BsStar className='text-yellow-400' />);

        return output
    }

    return (
        <Link to={`/movieid=${movie.id}`} className=' p-2 rounded hover:border-lime-100 items-center '>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title}
                className='h-48 w-full rounded' />
            <div className='w-full text-sm py-2'>
                <p className='text-slate-200'>{movie.title}</p>
                <span className='flex justify-between items-center'>
                    <p className='flex items-center gap-1 text-yellow-400'>{getStars(movie.vote_average)}</p>
                </span>
            </div>
        </Link>
    )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default Movie