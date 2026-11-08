import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router";

const MovieCast = ({ movie }) => {
    const { data, error, isPending, isError } = useQuery({
    queryKey: ['credits', { id: movie.id }],
    queryFn: getMovieCredits,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography>{error.message}</Typography>;
  }
  
  const cast = data.cast.slice(0, 8); //Return first 8 cast members (main cast) since there are hundreds of actors potentially

  if (cast.length === 0){
    return <Typography sx={{mt: 4}}>This movie seems to have no cast.</Typography>
  }

  return (
    <>
       <Typography variant="h5" component="h3" sx={{mt:4, mb:2}}>
        Cast
       </Typography>
       <Grid container spacing={2}>
        {cast.map((p)=>( //p for person lol
           <Grid key={p.id} size={{xs: 6, sm: 4, md: 3}}>
                <Card sx={{height: "100%"}}>
                  <CardActionArea
                    component={Link} //Added this so that clicking an actor card would take you to the actor's dedicated page
                    to={`/actors/${p.id}`}
                    sx={{ height: "100%"}}
                    >
                      <CardContent sx={{textAlign: "center"}}>
                          <Avatar 
                              src={
                                  p.profile_path
                                  ? `https://image.tmdb.org/t/p/w185${p.profile_path}` //Fallback for cast member without a picture
                                  : undefined
                              }
                              alt={p.name}
                              sx={{width:96, height:96, mx: "auto", mb:1}}
                          >  {/*displays the image as initials of the person when there is no image*/}
                              {p.name.charAt(0)}.{p.name.split(" ").at(-1).charAt(0)}.
                          </Avatar>
                          <Typography variant="subtitle1">{p.name}</Typography> 
                          <Typography variant="body2" color="text.secondary">
                              {p.character}
                          </Typography>
                      </CardContent>
                    </CardActionArea>
                </Card> 
           </Grid>
        ))}
    </Grid>
    </>
  );
};

export default MovieCast;