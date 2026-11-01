import React, {useState, useEffect} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const toDo = () => true;

  useEffect(()=>{
    getUpcomingMovies().then((movies)=>{
        setUpcomingMovies(movies);
    });
  }, []);
  
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      selectFavorite={toDo}
    />
  );
};

export default UpcomingMoviesPage;
