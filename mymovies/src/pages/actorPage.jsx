import { getPerson, getPersonMovieCredits } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MovieGrid from "../components/movieGrid";
import img from "../images/film-poster-placeholder.png";

const ActorPage = () => {
 const {id} = useParams();

  const { data: person, error, isPending, isError  } = useQuery({
      queryKey: ['person', {id}],
      queryFn: getPerson,
  })
  
  const { data: credits  } = useQuery({
      queryKey: ['personsMovies', {id}],
      queryFn: getPersonMovieCredits,
  })

  if (isPending) {
      return <Spinner />
  }
  
  if (isError) {
      return <h1>{error.message}</h1>
  }  
 
  //All movies the actor appeared in
 const cast = credits ? credits.cast : [];

 //Remove dupes, only keep first copy of movie
 const seenIds = new Set();
 const movieFirstRecords = cast.filter((movie) =>{
    if(seenIds.has(movie.id)){
        return false;
    }
    seenIds.add(movie.id);
    return true;
 })
//Most popular first and limited to top 12 entries
 const films = movieFirstRecords
 .sort(( a, b) => b.popularity - a.popularity)
 .slice( 0, 12);

  return (
    <Box sx={{ p: 3}}>
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 3}}>
                <Box
                    component="img"
                    src={
                        person.profile_path
                        ? `https://image.tmdb.org/t/p/w342${person.profile_path}`
                        : img
                    }
                    alt={person.name}
                    sx={{width: "100%", borderRadius: 2}}
                />
            </Grid>
            <Grid size={{xs:12, md:9}}>
                <Typography variant="h4" component="h2">
                    {person.name}
                </Typography>
                 <br />
                {person.birthday && (
                    <Typography color="text.secondary">
                        Born {person.birthday}
                        {person.place_of_birth ? ` in ${person.place_of_birth}` : ""}
                    </Typography>
                )}
                <br />
                <Typography color="text.secondary">
                    {person.biography || "No biography available."}
                </Typography>
            </Grid>
        </Grid>
        {credits ? <MovieGrid title="Known For" movies={films} /> : <Spinner />}
    </Box>
  );
};
export default ActorPage;