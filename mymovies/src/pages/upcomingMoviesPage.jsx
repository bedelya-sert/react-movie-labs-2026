import PageTemplate from "../components/templateMovieListPage";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const UpcomingMoviesPage = () => {

  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['upcoming'],
      queryFn: getUpcomingMovies,
  })

  if (isPending) {
      return <Spinner />
  }
  
  if (isError) {
      return <h1>{error.message}</h1>
  }  
    
 const movies = data.results;
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie)=> <AddToWatchListIcon movie={movie} />}
    />
  );
};
export default UpcomingMoviesPage;