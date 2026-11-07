import { Link } from "react-router";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";

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
  return (
    <>
       <Typography variant="h5" component="h3" sx={{mt:4, mb:2}}>
        Recommended
       </Typography>
       <Grid container spacing={2}>
        {recommendations.map((m)=>(
           <Grid key={m.id} size={{xs: 6, sm: 4, md: 3}}>
                <Card>
                    <CardActionArea component={Link} to={`/movies/${m.id}`}>
                        <CardMedia  //References https://developer.themoviedb.org/docs/image-basics for image construction
                           component="img"
                            image={
                                m.poster_path
                                ? `https://image.tmdb.org/t/p/w342${m.poster_path}` //Fallback
                                : img
                                }
                            alt={m.title}
                        />
                        <CardContent>
                            <Typography variant="body2">{m.title}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> 
           </Grid>
        ))}
    </Grid>
    </>
  );
};

export default MovieRecommendations;