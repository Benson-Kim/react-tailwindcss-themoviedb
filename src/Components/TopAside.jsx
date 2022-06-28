<<<<<<< HEAD
import { BsSuitHeart } from 'react-icons/bs'
import { BiHomeAlt } from 'react-icons/bi'
import { MdOutlineWorkOutline, MdOutlineUpcoming } from 'react-icons/md'
import { Link } from 'react-router-dom'

const TopAside = () => {
  return (
      <div className='py-1'>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <BiHomeAlt className='text-xl' />
              <h2>Discover</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <MdOutlineWorkOutline className='text-xl' />
              <h2>New Releases</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <MdOutlineUpcoming className='text-xl' />
              <h2>Upcoming</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <BsSuitHeart className='text-xl' />
              <h2>Favorites</h2>
          </Link>
      </div>
  )
}

=======
import { BsSuitHeart } from 'react-icons/bs'
import { BiHomeAlt } from 'react-icons/bi'
import { MdOutlineWorkOutline, MdOutlineUpcoming } from 'react-icons/md'
import { Link } from 'react-router-dom'

const TopAside = () => {
  return (
      <div className='py-1'>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <BiHomeAlt className='text-xl' />
              <h2>Discover</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <MdOutlineWorkOutline className='text-xl' />
              <h2>New Releases</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 mb-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <MdOutlineUpcoming className='text-xl' />
              <h2>Upcoming</h2>
          </Link>
          <Link to='' className='flex items-center gap-x-1 text-neutral-200 px-4 py-1 hover:border-indigo-600 hover:bg-neutral-900 hover:text-indigo-600 focus:border-l-2 focus:border-indigo-600 focus:bg-neutral-900 focus:text-indigo-600'>
              <BsSuitHeart className='text-xl' />
              <h2>Favorites</h2>
          </Link>
      </div>
  )
}

>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
export default TopAside