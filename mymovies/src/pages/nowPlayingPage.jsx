import PageTemplate from "../components/templateMovieListPage";
import AddToFavourites from "../components/cardIcons/addToFavorites";
import { getNowPlaying } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const NowPlayingPage = () => {

  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['now playing'],
      queryFn: getNowPlaying,
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
      title="Now Playing"
      movies={movies}
      action={(movie)=> <AddToFavourites movie={movie} />}
    />
  );
};
export default NowPlayingPage;