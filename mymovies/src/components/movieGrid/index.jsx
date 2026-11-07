import { Link } from "react-router";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";

//Moved all duplicate code from recommendations here
const MovieGrid = ({ title, movies }) => {
   if(!movies || movies.length ===0){
    return null;
   } //if there are no movies in the list

    return (
    <>
       <Typography variant="h5" component="h3" sx={{mt:4, mb:2}}>
        {title}
       </Typography>
       <Grid container spacing={2}>
        {movies.map((m)=>(
           <Grid key={m.id} size={{xs: 6, sm: 4, md: 3}}>
                <Card sx={{height: "100%"}}>
                    <CardActionArea component={Link} to={`/movies/${m.id}`} sx={{height: "100%"}}>
                        <CardMedia  
                            component="img"
                            image={
                                m.poster_path
                                ? `https://image.tmdb.org/t/p/w342${m.poster_path}`
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

export default MovieGrid;