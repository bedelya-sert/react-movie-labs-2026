import { getMovieRecommendations } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import MovieGrid from "../movieGrid"

const MovieRecommendations = ({ movie }) => {
    const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendations,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography>{error.message}</Typography>;
  }
  
  const recommendations = data.results.slice(0, 8);

  if (recommendations.length === 0){
    return <Typography sx={{mt: 4}}>No recommendations for this movie yet.</Typography>
  }
// Took a lot of inspiration and code from -> layout https://mui.com/material-ui/react-card/ and https://react.dev/learn/rendering-lists
  //Since the format is the same I just compiled the entire layout into Moviegrid to be re-usable and removed related code here
  return <MovieGrid title="Recommended" movies={recommendations}/>
};

export default MovieRecommendations;