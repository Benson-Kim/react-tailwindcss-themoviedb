<<<<<<< HEAD
import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TopAside from './TopAside'

const url = ' https://api.themoviedb.org/3/genre/movie/list?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US'

const Sidebar = () => {

  const [genres, setGenres] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(res => setGenres(res.data.genres))
  }, [])

  return (
    <aside className='w-56 bg-neutral-700 h-full flex flex-col py-3'>
      <TopAside />
      <h2 className='text-slate-200 font-semibold mx-2 py-1'>Genre</h2>
      {genres ? genres.map((genre) => (
        <Link to={`/genreid=${genre.id}`} key={genre.id} className='text-slate-200 px-2 py-1 text-sm mx-2 rounded hover:bg-blue-100 hover:text-slate-700 '>
          {genre.name}
        </Link>
      )) : 'loading'}
    </aside>
  )
}

=======
import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TopAside from './TopAside'

const url = ' https://api.themoviedb.org/3/genre/movie/list?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US'

const Sidebar = () => {

  const [genres, setGenres] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(res => setGenres(res.data.genres))
  }, [])

  return (
    <aside className='w-56 bg-neutral-700 h-full flex flex-col py-3'>
      <TopAside />
      <h2 className='text-slate-200 font-semibold mx-2 py-1'>Genre</h2>
      {genres ? genres.map((genre) => (
        <Link to={`/genreid=${genre.id}`} key={genre.id} className='text-slate-200 px-2 py-1 text-sm mx-2 rounded hover:bg-blue-100 hover:text-slate-700 '>
          {genre.name}
        </Link>
      )) : 'loading'}
    </aside>
  )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default Sidebar