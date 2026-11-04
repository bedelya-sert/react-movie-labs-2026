import { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setUpcomingMovies(movies);
    });
  }, []);

  useEffect(() => {
    const favorites = upcomingMovies.filter((m) => m.favorite);
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [upcomingMovies]);

  const addToFavorites = (movieId) => {
    const updatedMovies = upcomingMovies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setUpcomingMovies(updatedMovies);
  };

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      selectFavorite={addToFavorites}
      action={(movie)=> <AddToWatchListIcon movie={movie} />}
    />
  );
};
export default UpcomingMoviesPage;