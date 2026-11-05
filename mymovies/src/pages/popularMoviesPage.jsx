import PageTemplate from "../components/templateMovieListPage";
import AddToFavourites from "../components/cardIcons/addToFavorites";
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const PopularMoviesPage = () => {

  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['popular'],
      queryFn: getPopularMovies,
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
      title="Popular Movies"
      movies={movies}
      action={(movie)=> <AddToFavourites movie={movie} />}
    />
  );
};
export default PopularMoviesPage;