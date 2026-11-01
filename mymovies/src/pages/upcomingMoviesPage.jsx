import React, {useState, useEffect} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(()=>{
    getUpcomingMovies().then((movies)=>{
        setUpcomingMovies(movies);
    });
  }, []);
  
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      selectFavorite={addToFavorites}
    />
  );
};

export default UpcomingMoviesPage;
