<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiVisualstudio } from "react-icons/di";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import axios from "axios";
import { getTrendingMovies } from "../Features/Slices/movieSlice";
import { fetchMovieGenre } from "../Features/Slices/genreSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (query) {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&query=${query}&page=1`
        const { data } = await axios.get(url);
        console.log(data);
        dispatch(getTrendingMovies(data.results));
        dispatch(fetchMovieGenre(data.results));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-indigo-600 h-16 flex items-center justify-between pr-5">
      <div className="flex items-center">
        <Link
          to=""
          className="w-56 text-indigo-100 px-3 flex items-center gap-x-2 hover:text-indigo-50"
        >
          <DiVisualstudio className="text-2xl" />
          <h2 className="text-xl uppercase font-semibold font-mono">
            Media HD
          </h2>
        </Link>
        <div className="flex items-center text-indigo-300">
          <BiSearchAlt2 className="text-xl " />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Search ..."
              className="text-indigo-300 border-none placeholder:text-indigo-300 focus:ring-0 focus:outline-none rounded py-1 px-2 bg-inherit"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <BsGear className="text-indigo-300 text-xl hover:text-indigo-50" />
        </Link>
        <Link to="/">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-8 h-8 rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiVisualstudio } from "react-icons/di";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import axios from "axios";
import { getTrendingMovies } from "../Features/Slices/movieSlice";
import { fetchMovieGenre } from "../Features/Slices/genreSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (query) {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&query=${query}&page=1`
        const { data } = await axios.get(url);
        console.log(data);
        dispatch(getTrendingMovies(data.results));
        dispatch(fetchMovieGenre(data.results));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-indigo-600 h-16 flex items-center justify-between pr-5">
      <div className="flex items-center">
        <Link
          to=""
          className="w-56 text-indigo-100 px-3 flex items-center gap-x-2 hover:text-indigo-50"
        >
          <DiVisualstudio className="text-2xl" />
          <h2 className="text-xl uppercase font-semibold font-mono">
            Media HD
          </h2>
        </Link>
        <div className="flex items-center text-indigo-300">
          <BiSearchAlt2 className="text-xl " />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Search ..."
              className="text-indigo-300 border-none placeholder:text-indigo-300 focus:ring-0 focus:outline-none rounded py-1 px-2 bg-inherit"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <BsGear className="text-indigo-300 text-xl hover:text-indigo-50" />
        </Link>
        <Link to="/">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-8 h-8 rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> d0bc6634407da810a2f2508171e69bf45cc0cdc0
