import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Movies from './Components/Movies';
import GenreMovies from './Components/GenreMovies'
import Movie from './Components/Movie';
import MovieDetail from './Components/MovieDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Movies />} />
          <Route path='/genreid=:genre' element={<GenreMovies />} />
          <Route path='/movieid=:movie' element={<MovieDetail />} />
        </Route>
      </Routes>
        
      </BrowserRouter>
  </React.StrictMode>
);

